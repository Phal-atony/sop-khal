import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2, AlertCircle } from 'lucide-react';

const clickableSelector = [
  'button',
  'a',
  '[role="button"]',
  'input[type="button"]',
  'input[type="submit"]',
  '.purple-button',
  '.ghost-button',
  '.social-square',
].join(', ');

type WebAudioWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

const TRACK_TITLE = 'In Dreamland';
const TRACK_ARTIST = 'Chillpeach';
const TRACK_FILE_PATH = `${import.meta.env.BASE_URL}music/in-dreamland-chillpeach.mp3`;

const MASTER_VOLUME = 0.95;
const TRACK_VOLUME = 0.95;
const CLICK_VOLUME = 0.38;

const createGain = (context: AudioContext, value: number) => {
  const gain = context.createGain();
  gain.gain.value = value;
  return gain;
};

export default function SiteAudio() {
  const contextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const trackRef = useRef<HTMLAudioElement | null>(null);
  const musicStartedRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [missingFile, setMissingFile] = useState(false);

  useEffect(() => {
    const audioWindow = window as WebAudioWindow;
    const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext;

    if (!AudioContextClass) return undefined;

    const getContext = () => {
      if (contextRef.current) return contextRef.current;

      const context = new AudioContextClass();
      const masterGain = createGain(context, MASTER_VOLUME);
      const compressor = context.createDynamicsCompressor();

      compressor.threshold.setValueAtTime(-16, context.currentTime);
      compressor.knee.setValueAtTime(16, context.currentTime);
      compressor.ratio.setValueAtTime(4, context.currentTime);
      compressor.attack.setValueAtTime(0.005, context.currentTime);
      compressor.release.setValueAtTime(0.12, context.currentTime);

      masterGain.connect(compressor);
      compressor.connect(context.destination);

      contextRef.current = context;
      masterGainRef.current = masterGain;

      return context;
    };

    const getTrack = () => {
      if (trackRef.current) return trackRef.current;

      const track = new Audio(TRACK_FILE_PATH);
      track.loop = true;
      track.preload = 'auto';
      track.volume = TRACK_VOLUME;

      track.addEventListener('playing', () => {
        musicStartedRef.current = true;
        setStarted(true);
        setMissingFile(false);
      });

      track.addEventListener('pause', () => {
        if (!track.ended) return;
        setStarted(false);
      });

      track.addEventListener('error', () => {
        musicStartedRef.current = false;
        setStarted(false);
        setMissingFile(true);
      });

      trackRef.current = track;
      return track;
    };

    const playClick = (context: AudioContext) => {
      if (!masterGainRef.current) return;

      const time = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(860, time);
      oscillator.frequency.exponentialRampToValueAtTime(430, time + 0.1);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2800, time);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(CLICK_VOLUME, time + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.13);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      oscillator.start(time);
      oscillator.stop(time + 0.15);
    };

    const startRealTrack = async () => {
      const track = getTrack();

      try {
        await track.play();
        musicStartedRef.current = true;
        setStarted(true);
        setMissingFile(false);
      } catch {
        musicStartedRef.current = false;
        setStarted(false);
        setMissingFile(true);
      }
    };

    const activateAudio = async () => {
      const context = getContext();

      if (context.state === 'suspended') {
        await context.resume().catch(() => undefined);
      }

      if (!musicStartedRef.current) {
        await startRealTrack();
      }

      playClick(context);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(clickableSelector)) return;

      void activateAudio();
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);

      if (trackRef.current) {
        trackRef.current.pause();
        trackRef.current.src = '';
        trackRef.current.load();
      }

      void contextRef.current?.close();
      contextRef.current = null;
      masterGainRef.current = null;
      trackRef.current = null;
      musicStartedRef.current = false;
    };
  }, []);

  return (
    <button
      type="button"
      className="fixed bottom-5 left-4 z-40 hidden items-center gap-3 rounded-full border border-violet-500/25 bg-[#0b0714]/80 px-4 py-2.5 text-left shadow-[0_0_24px_rgba(139,92,246,0.18)] backdrop-blur-xl transition duration-300 hover:border-violet-400/55 hover:bg-[#120a23]/90 md:inline-flex"
      aria-label={`Play ${TRACK_TITLE} by ${TRACK_ARTIST}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/25">
        <span className={`absolute inset-0 rounded-full bg-violet-500/20 ${started ? 'animate-ping' : ''}`} />
        {missingFile ? <AlertCircle className="relative h-4 w-4 text-amber-200" /> : started ? <Volume2 className="relative h-4 w-4" /> : <Music2 className="relative h-4 w-4" />}
      </span>

      <span className="leading-tight">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/80">
          {missingFile ? 'MP3 Missing' : started ? 'Now Playing' : 'Click to Play'}
        </span>
        <span className="block max-w-[220px] truncate text-sm font-bold text-white">
          {TRACK_TITLE}
          <span className="font-medium text-slate-400"> — {TRACK_ARTIST}</span>
        </span>
        {missingFile && (
          <span className="block text-[10px] font-medium text-amber-200/75">Put the MP3 in public/music</span>
        )}
      </span>
    </button>
  );
}
