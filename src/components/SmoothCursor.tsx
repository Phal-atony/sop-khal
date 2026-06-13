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
  const hideTimer = useRef<number>();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return undefined;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    target.current = { x: startX, y: startY };
    current.current = { x: startX, y: startY };
    ring.current = { x: startX, y: startY };

    setPosition(glowRef.current, startX, startY);
    setPosition(ringRef.current, startX, startY);

    const clearHideTimer = () => {
      if (!hideTimer.current) return;
      window.clearTimeout(hideTimer.current);
      hideTimer.current = undefined;
    };

    const showEffect = (x: number, y: number, eventTarget: EventTarget | null, pointerType: string) => {
      clearHideTimer();

      target.current.x = x;
      target.current.y = y;

      const hoveredElement = eventTarget instanceof Element && eventTarget.closest(interactiveSelector);
      const isTouch = pointerType === 'touch' || pointerType === 'pen';

      document.documentElement.classList.add('mouse-glow-active');
      document.documentElement.classList.toggle('mouse-glow-hover', Boolean(hoveredElement));
      document.documentElement.classList.toggle('mouse-glow-touch', isTouch);
    };

    const hideEffect = () => {
      document.documentElement.classList.remove('mouse-glow-active', 'mouse-glow-hover', 'mouse-glow-touch');
    };

    const hideTouchEffectSoon = () => {
      clearHideTimer();
      hideTimer.current = window.setTimeout(hideEffect, 420);
    };

    const handlePointerMove = (event: PointerEvent) => {
      showEffect(event.clientX, event.clientY, event.target, event.pointerType || 'mouse');
    };

    const handlePointerDown = (event: PointerEvent) => {
      showEffect(event.clientX, event.clientY, event.target, event.pointerType || 'mouse');
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || event.pointerType === 'pen') {
        hideTouchEffectSoon();
      }
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') hideEffect();
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      ring.current.x += (target.current.x - ring.current.x) * 0.34;
      ring.current.y += (target.current.y - ring.current.y) * 0.34;

      setPosition(glowRef.current, current.current.x, current.current.y);
      setPosition(ringRef.current, ring.current.x, ring.current.y);

      rafId.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', hideEffect, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    rafId.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', hideEffect);
      window.removeEventListener('pointerleave', handlePointerLeave);
      clearHideTimer();
      hideEffect();

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
