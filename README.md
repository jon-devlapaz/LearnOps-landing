# socratink-landing

Waitlist landing page for socratink: AI-augmented study pipeline for the ADHD brain.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Lucide React (icons)
- Google Gemini (demo extraction + evaluation)
- Web3Forms (waitlist capture)
- Vercel (deployment + serverless functions)

## Development

Requires the Vercel CLI to run the `/api` serverless functions locally:

```bash
npm install
vercel dev
```

Create `.env.local` in the project root:

```
GEMINI_API_KEY=your_key_here
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

## Deployment

Deploys automatically to Vercel on push to `main`.

Set both environment variables in Vercel dashboard (Settings → Environment Variables):

```
GEMINI_API_KEY=your_key_here
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

## API Routes

- `POST /api/demo-extract` — extracts causal mechanisms from pasted text, returns a Socratic question
- `POST /api/demo-evaluate` — evaluates student answer against extracted mechanisms, returns gap analysis
