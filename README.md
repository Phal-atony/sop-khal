# Sokphal Portfolio Redesign

Premium dark purple portfolio redesign inspired by the provided reference/video.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Main files changed

- `src/App.tsx`
- `src/index.css`
- `src/components/*`
- `index.html`

## Notes

- The CSS file was renamed from `inedx.css` to `index.css` and `src/main.tsx` was updated.
- Contact form is frontend-only and ready for backend, email, or Telegram integration.

## Music

The music badge is set to **In Dreamland — Chillpeach**.

To use the actual track, add your legally obtained MP3 file here:

```text
public/music/in-dreamland-chillpeach.mp3
```

The old generated fallback music was removed. If the MP3 file is not present, the site will not play background music and will show an MP3 missing message.
