import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2 } from 'lucide-react';

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
const CLICK_SOUND_PATH = `${import.meta.env.BASE_URL}sounds/click.wav`;

const MASTER_VOLUME = 1;
const TRACK_VOLUME = 1;
const CLICK_VOLUME = 1;
const CLICK_POOL_SIZE = 10;

const createGain = (context: AudioContext, value: number) => {
  const gain = context.createGain();
  gain.gain.value = value;
  return gain;
};

export default function SiteAudio() {
  const contextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const trackRef = useRef<HTMLAudioElement | null>(null);
  const clickPlayersRef = useRef<HTMLAudioElement[]>([]);
  const clickIndexRef = useRef(0);
  const clickBufferRef = useRef<AudioBuffer | null>(null);
  const clickBufferLoadingRef = useRef(false);
  const musicStartedRef = useRef(false);
  const triedMusicRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [missingFile, setMissingFile] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const audioWindow = window as WebAudioWindow;
    const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext;

    if (!AudioContextClass) return undefined;

    const getContext = () => {
      if (contextRef.current) return contextRef.current;

      const context = new AudioContextClass({ latencyHint: 'interactive' });
      const masterGain = createGain(context, MASTER_VOLUME);
      const compressor = context.createDynamicsCompressor();

      compressor.threshold.setValueAtTime(-14, context.currentTime);
      compressor.knee.setValueAtTime(14, context.currentTime);
      compressor.ratio.setValueAtTime(3, context.currentTime);
      compressor.attack.setValueAtTime(0.003, context.currentTime);
      compressor.release.setValueAtTime(0.1, context.currentTime);

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
      track.muted = false;
      track.autoplay = false;
      track.crossOrigin = 'anonymous';
      track.setAttribute('playsinline', 'true');
      track.load();

      track.addEventListener('canplaythrough', () => {
        if (!musicStartedRef.current && triedMusicRef.current) {
          void startMusicNow();
        }
      });

      track.addEventListener('playing', () => {
        musicStartedRef.current = true;
        setStarted(true);
        setMissingFile(false);
        setBlocked(false);
      });

      track.addEventListener('pause', () => {
        if (!track.ended) return;
        musicStartedRef.current = false;
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

    const getClickPlayers = () => {
      if (clickPlayersRef.current.length) return clickPlayersRef.current;

      clickPlayersRef.current = Array.from({ length: CLICK_POOL_SIZE }, () => {
        const audio = new Audio(CLICK_SOUND_PATH);
        audio.preload = 'auto';
        audio.volume = CLICK_VOLUME;
        audio.load();
        return audio;
      });

      return clickPlayersRef.current;
    };

    const preloadClickBuffer = async () => {
      if (clickBufferRef.current || clickBufferLoadingRef.current) return;
      clickBufferLoadingRef.current = true;

      try {
        const context = getContext();
        const response = await fetch(CLICK_SOUND_PATH, { cache: 'force-cache' });
        const arrayBuffer = await response.arrayBuffer();
        clickBufferRef.current = await context.decodeAudioData(arrayBuffer.slice(0));
      } catch {
        clickBufferRef.current = null;
      } finally {
        clickBufferLoadingRef.current = false;
      }
    };

    const playFallbackClick = (context: AudioContext) => {
      if (!masterGainRef.current) return;

      const time = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(980, time);
      oscillator.frequency.exponentialRampToValueAtTime(420, time + 0.06);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3600, time);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.28, time + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      oscillator.start(time);
      oscillator.stop(time + 0.1);
    };

    const playBufferClick = (context: AudioContext) => {
      if (!clickBufferRef.current || !masterGainRef.current || context.state !== 'running') return false;

      const source = context.createBufferSource();
      const gain = context.createGain();
      source.buffer = clickBufferRef.current;
      gain.gain.value = CLICK_VOLUME;
      source.connect(gain);
      gain.connect(masterGainRef.current);
      source.start(context.currentTime + 0.001);
      return true;
    };

    const playHtmlClick = () => {
      const players = getClickPlayers();
      const player = players[clickIndexRef.current % players.length];
      clickIndexRef.current += 1;

      try {
        player.pause();
        player.currentTime = 0;
        player.volume = CLICK_VOLUME;
        void player.play();
        return true;
      } catch {
        return false;
      }
    };

    const playClickNow = (context: AudioContext) => {
      if (playBufferClick(context)) return;
      if (playHtmlClick()) return;
      playFallbackClick(context);
    };

    const startMusicNow = async () => {
      const track = getTrack();
      triedMusicRef.current = true;

      if (musicStartedRef.current) return true;

      try {
        track.muted = false;
        track.volume = TRACK_VOLUME;

        if (track.readyState === 0) {
          track.load();
        }

        await track.play();
        musicStartedRef.current = true;
        setStarted(true);
        setMissingFile(false);
        setBlocked(false);
        return true;
      } catch {
        musicStartedRef.current = false;
        setStarted(false);
        setBlocked(true);
        return false;
      }
    };

    const activateMusicAndSound = (target: EventTarget | null, playClick: boolean) => {
      const context = getContext();

      if (context.state === 'suspended') {
        void context.resume();
      }

      // Start music immediately inside the user gesture. This is required on mobile browsers.
      void startMusicNow();

      if (playClick && target instanceof Element && target.closest(clickableSelector)) {
        playClickNow(context);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      activateMusicAndSound(event.target, true);
    };

    const handleTouchStart = (event: TouchEvent) => {
      activateMusicAndSound(event.target, true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      activateMusicAndSound(event.target, true);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && triedMusicRef.current && !musicStartedRef.current) {
        void startMusicNow();
      }
    };

    getTrack();
    getClickPlayers();
    void preloadClickBuffer();

    document.addEventListener('pointerdown', handlePointerDown, true);
    document.addEventListener('touchstart', handleTouchStart, { capture: true, passive: true });
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      document.removeEventListener('touchstart', handleTouchStart, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (trackRef.current) {
        trackRef.current.pause();
        trackRef.current.src = '';
        trackRef.current.load();
      }

      clickPlayersRef.current.forEach((audio) => {
        audio.pause();
        audio.src = '';
        audio.load();
      });

      void contextRef.current?.close();
      contextRef.current = null;
      masterGainRef.current = null;
      trackRef.current = null;
      clickPlayersRef.current = [];
      clickBufferRef.current = null;
      clickBufferLoadingRef.current = false;
      musicStartedRef.current = false;
      triedMusicRef.current = false;
    };
  }, []);

  const label = started ? 'Now Playing' : blocked ? 'Tap to Start' : 'Music Ready';

  return null;
}
