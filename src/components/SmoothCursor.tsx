import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  time: number;
};

type Particle = Point & {
  vx: number;
  vy: number;
  size: number;
  life: number;
};

type Ripple = Point & {
  life: number;
};

const TRAIL_LIFE = 820;
const PARTICLE_LIFE = 720;
const RIPPLE_LIFE = 640;
const MAX_TRAIL_POINTS = 38;
const MAX_PARTICLES = 76;
const FOLLOW_SPEED = 0.2;

const PURPLE = {
  soft: 'rgba(216, 180, 254,',
  light: 'rgba(196, 181, 253,',
  main: 'rgba(168, 85, 247,',
  deep: 'rgba(124, 58, 237,',
  dark: 'rgba(88, 28, 135,',
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

export default function SmoothCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let isVisible = false;
    let targetX = width / 2;
    let targetY = height / 2;
    let smoothX = targetX;
    let smoothY = targetY;
    let lastMove = 0;
    let lastParticleX = targetX;
    let lastParticleY = targetY;
    let ringSpin = 0;

    const trail: Point[] = [];
    const particles: Particle[] = [];
    const ripples: Ripple[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addParticle = (x: number, y: number, now: number, force = false) => {
      const distance = Math.hypot(x - lastParticleX, y - lastParticleY);
      if (!force && distance < 7) return;

      lastParticleX = x;
      lastParticleY = y;

      const count = force ? 10 : 2;

      for (let i = 0; i < count; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = force ? 0.85 + Math.random() * 1.75 : 0.25 + Math.random() * 0.85;

        particles.push({
          x,
          y,
          time: now,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: force ? 2 + Math.random() * 3.2 : 1.35 + Math.random() * 2.15,
          life: force ? PARTICLE_LIFE + 190 : PARTICLE_LIFE,
        });
      }

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES);
      }
    };

    const addTrail = (x: number, y: number, now: number) => {
      trail.push({ x, y, time: now });
      if (trail.length > MAX_TRAIL_POINTS) trail.shift();
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      const now = performance.now();
      lastMove = now;
      isVisible = true;
      addTrail(targetX, targetY, now);
      addParticle(targetX, targetY, now);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      targetX = event.clientX;
      targetY = event.clientY;
      const now = performance.now();
      lastMove = now;
      isVisible = true;
      ripples.push({ x: targetX, y: targetY, time: now, life: RIPPLE_LIFE });
      addParticle(targetX, targetY, now, true);
    };

    const onPointerLeave = () => {
      lastMove = performance.now() - 420;
    };

    const drawTrail = (now: number, fade: number) => {
      const liveTrail = trail.filter((point) => now - point.time <= TRAIL_LIFE);
      trail.splice(0, trail.length, ...liveTrail);

      if (liveTrail.length < 2) return;

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 1; i < liveTrail.length; i += 1) {
        const prev = liveTrail[i - 1];
        const point = liveTrail[i];
        const age = now - point.time;
        const alpha = clamp((1 - age / TRAIL_LIFE) * fade, 0, 1);

        if (alpha <= 0.02) continue;

        ctx.strokeStyle = `${PURPLE.main} ${alpha * 0.46})`;
        ctx.lineWidth = 1.35 + alpha * 3.15;
        ctx.shadowColor = `${PURPLE.soft} ${alpha * 0.48})`;
        ctx.shadowBlur = 15 * alpha;
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawParticles = (now: number, fade: number) => {
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        const age = now - particle.time;

        if (age > particle.life) {
          particles.splice(i, 1);
          continue;
        }

        const progress = age / particle.life;
        const alpha = clamp((1 - progress) * fade, 0, 1);
        const x = particle.x + particle.vx * age * 0.09;
        const y = particle.y + particle.vy * age * 0.09 - progress * 5;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowColor = `${PURPLE.soft} 0.72)`;
        ctx.shadowBlur = 11;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `${PURPLE.main} 0.76)`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const drawRipples = (now: number, fade: number) => {
      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        const ripple = ripples[i];
        const age = now - ripple.time;

        if (age > ripple.life) {
          ripples.splice(i, 1);
          continue;
        }

        const progress = age / ripple.life;
        const radius = 12 + progress * 52;
        const alpha = clamp((1 - progress) * fade, 0, 1);

        ctx.save();
        ctx.strokeStyle = `${PURPLE.light} ${alpha * 0.52})`;
        ctx.lineWidth = 2.25 - progress;
        ctx.shadowColor = `${PURPLE.main} ${alpha * 0.58})`;
        ctx.shadowBlur = 19 * alpha;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    };

    const drawCursor = (now: number, fade: number) => {
      if (fade <= 0.02) return;

      ringSpin += 0.018;
      const pulse = Math.sin(now * 0.006) * 2.1;
      const ringRadius = 27 + pulse;

      ctx.save();
      ctx.globalAlpha = fade;
      ctx.translate(smoothX, smoothY);
      ctx.rotate(ringSpin);

      ctx.setLineDash([4.5, 5.5]);
      ctx.strokeStyle = `${PURPLE.soft} 0.72)`;
      ctx.lineWidth = 1.55;
      ctx.shadowColor = `${PURPLE.main} 0.68)`;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.rotate(-ringSpin);

      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 24);
      glow.addColorStop(0, 'rgba(255, 255, 255, 0.82)');
      glow.addColorStop(0.38, `${PURPLE.soft} 0.34)`);
      glow.addColorStop(0.72, `${PURPLE.main} 0.16)`);
      glow.addColorStop(1, `${PURPLE.dark} 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.fill();

      roundedRect(ctx, -6, -6, 12, 12, 3.2);
      const fill = ctx.createLinearGradient(-6, -6, 6, 6);
      fill.addColorStop(0, '#faf5ff');
      fill.addColorStop(0.42, '#d8b4fe');
      fill.addColorStop(0.72, '#a855f7');
      fill.addColorStop(1, '#6d28d9');
      ctx.fillStyle = fill;
      ctx.shadowColor = `${PURPLE.deep} 0.72)`;
      ctx.shadowBlur = 13;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.lineWidth = 1.15;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, width, height);

      smoothX += (targetX - smoothX) * FOLLOW_SPEED;
      smoothY += (targetY - smoothY) * FOLLOW_SPEED;

      const idleFor = now - lastMove;
      const fade = isVisible ? clamp(1 - Math.max(0, idleFor - 320) / 920, 0, 1) : 0;

      if (fade <= 0 && particles.length === 0 && ripples.length === 0 && trail.length === 0) {
        isVisible = false;
      }

      drawTrail(now, fade);
      drawParticles(now, Math.max(fade, 0.25));
      drawRipples(now, Math.max(fade, 0.35));
      drawCursor(now, fade);

      raf = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerleave', onPointerLeave);
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return <canvas ref={canvasRef} className="smooth-purple-cursor-canvas" aria-hidden="true" />;
}
