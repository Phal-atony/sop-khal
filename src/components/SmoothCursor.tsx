import { useEffect, useRef } from 'react';

const interactiveSelector =
  'a, button, input, textarea, select, [role="button"], [data-cursor="hover"], .skill-card, .project-card, .glass-card';

const setPosition = (element: HTMLElement | null, x: number, y: number) => {
  if (!element) return;
  element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
};

export default function SmoothCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (reduceMotion || coarsePointer) return undefined;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    target.current = { x: startX, y: startY };
    current.current = { x: startX, y: startY };
    ring.current = { x: startX, y: startY };

    setPosition(glowRef.current, startX, startY);
    setPosition(ringRef.current, startX, startY);

    const handleMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      const hoveredElement = event.target instanceof Element && event.target.closest(interactiveSelector);

      document.documentElement.classList.add('mouse-glow-active');
      document.documentElement.classList.toggle('mouse-glow-hover', Boolean(hoveredElement));
    };

    const handleLeave = () => {
      document.documentElement.classList.remove('mouse-glow-active', 'mouse-glow-hover');
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      ring.current.x += (target.current.x - ring.current.x) * 0.28;
      ring.current.y += (target.current.y - ring.current.y) * 0.28;

      setPosition(glowRef.current, current.current.x, current.current.y);
      setPosition(ringRef.current, ring.current.x, ring.current.y);

      rafId.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseleave', handleLeave);
    rafId.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      document.documentElement.classList.remove('mouse-glow-active', 'mouse-glow-hover');

      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="mouse-follow-effect" aria-hidden="true">
      <div ref={glowRef} className="mouse-follow-effect__glow" />
      <div ref={ringRef} className="mouse-follow-effect__ring" />
    </div>
  );
}
