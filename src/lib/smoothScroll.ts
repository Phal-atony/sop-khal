type ScrollOptions = {
  offset?: number;
  duration?: number;
};

let activeScrollFrame: number | null = null;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const easeOutQuint = (value: number) => 1 - Math.pow(1 - value, 5);

export function smoothScrollToY(targetY: number, options: ScrollOptions = {}) {
  if (typeof window === 'undefined') return;

  if (activeScrollFrame !== null) {
    window.cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const startY = window.scrollY;
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const target = clamp(targetY - (options.offset ?? 0), 0, maxY);
  const distance = target - startY;

  if (reduceMotion || Math.abs(distance) < 6) {
    window.scrollTo(0, target);
    return;
  }

  const duration = options.duration ?? clamp(Math.abs(distance) * 0.18, 260, 680);
  let startTime: number | null = null;

  const step = (time: number) => {
    startTime ??= time;
    const progress = clamp((time - startTime) / duration, 0, 1);
    const eased = easeOutQuint(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, target);
      activeScrollFrame = null;
    }
  };

  activeScrollFrame = window.requestAnimationFrame(step);
}

export function smoothScrollToSection(id: string, options: ScrollOptions = {}) {
  if (typeof document === 'undefined') return;
  const section = document.getElementById(id);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.scrollY;
  smoothScrollToY(targetY, { offset: options.offset ?? 84, duration: options.duration });
}

export function smoothScrollToTop() {
  smoothScrollToY(0, { offset: 0, duration: 420 });
}
