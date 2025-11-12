# Startup Dose Website

A production-ready Next.js 14 starter template with TypeScript, Tailwind CSS, ESLint, and Prettier.

## Tech Stack

- **Next.js 14** with App Router
- **React 18** with TypeScript (strict mode)
- **Tailwind CSS** with dark mode support (class-based)
- **ESLint** with Next.js and TypeScript rules
- **Prettier** for code formatting
- **PostCSS** and Autoprefixer for CSS processing

## Features

- ✅ TypeScript strict mode enabled
- ✅ Tailwind CSS with dark mode (class strategy)
- ✅ ESLint configured for Next.js and TypeScript
- ✅ Prettier integration with ESLint
- ✅ Path aliases (@/* for imports)
- ✅ Accessibility best practices (landmark roles, semantic HTML)
- ✅ SEO metadata and OpenGraph tags
- ✅ Dark mode toggle component
- ✅ Example page and components
- ✅ Production-ready configuration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with server-side API example
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   ├── ThemeToggle.tsx     # Dark mode toggle
│   └── ClientExample.tsx   # Client-side API example
├── lib/
│   ├── env.ts             # Environment variable loader and validator
│   └── http.ts            # HTTP client with apiFetch helper
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── .env.local             # Local development environment
├── .env.production        # Production environment
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration with API rewrites
```

## Configuration

### TypeScript

Strict mode is enabled by default. Configuration in `tsconfig.json`.

### Tailwind CSS

Dark mode is configured using the `class` strategy. Add `dark` class to `<html>` element to enable dark mode.

### ESLint & Prettier

Rules are configured to work seamlessly together:
- ESLint: Next.js core-web-vitals + TypeScript rules
- Prettier: Sensible defaults with ESLint integration

Format code before committing:
```bash
npm run format
```

## Components

### Header

Navigation header with semantic HTML and accessibility support.

### ThemeToggle

Client-side dark mode toggle with:
- Persistent theme preference (localStorage)
- System preference detection
- Smooth transitions
- SVG icons

## SEO & Metadata

The root layout includes:
- Page title and description
- Keywords and author information
- OpenGraph metadata for social sharing

## Accessibility

- Semantic HTML (header, main, nav)
- Landmark roles (banner, navigation, main)
- ARIA labels on interactive elements
- High contrast dark mode support
- Reduced motion support

## API Integration

This project is configured to communicate with a backend API using environment variables and safe defaults.

### Environment Variables

The project uses two environment variables for API configuration:

- **`API_BASE_URL`**: Used on the server-side. Can be an internal URL (e.g., `http://localhost:4000`).
- **`NEXT_PUBLIC_API_BASE_URL`**: Used on the client-side. Must be publicly accessible. Same as `API_BASE_URL` in most cases.

**Important:** Only variables prefixed with `NEXT_PUBLIC_` are accessible in the browser. Never expose secrets in client-side variables.

### Configuration Files

```bash
# Local development
.env.local
API_BASE_URL=http://localhost:4000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

# Production
.env.production
API_BASE_URL=https://api.myapp.com
NEXT_PUBLIC_API_BASE_URL=https://api.myapp.com
```

### Integration Options

The project provides two integration patterns:

#### 1. Reverse Proxy Rewrites (Development)

The Next.js development server rewrites requests from `/api/*` to the actual backend URL. This eliminates CORS issues during development.

**How it works:**
- Client request: `fetch('/api/posts/1')`
- Next.js rewrites to: `http://localhost:4000/posts/1`
- No CORS issues, transparent to the frontend

**Configuration:** See `next.config.js`

**Usage example (Server Component):**
```typescript
const post = await apiFetch('/api/posts/1', { cache: 'no-store' });
```

#### 2. Typed Fetch Helper

The `apiFetch` helper abstracts away environment variable handling and provides typed responses.

**How it works:**
- Automatically uses `API_BASE_URL` on the server and `NEXT_PUBLIC_API_BASE_URL` on the client
- Adds sensible defaults (Content-Type headers)
- Throws detailed errors on non-2xx responses
- Works in both Server and Client Components

**Location:** `lib/http.ts`

**Usage example (Client Component):**
```typescript
'use client';
import { apiFetch } from '@/lib/http';

// In useEffect or event handler
const data = await apiFetch('posts/1');
```

### API Error Handling

The `apiFetch` helper throws typed errors with useful context:

```typescript
interface ApiError extends Error {
  status: number;
  url: string;
  body?: unknown;
}

try {
  const data = await apiFetch('posts/1');
} catch (error) {
  console.error('Status:', (error as ApiError).status);
  console.error('URL:', (error as ApiError).url);
  console.error('Body:', (error as ApiError).body);
}
```

### Environment Variable Validation

The `lib/env.ts` module validates required environment variables at module load time:

```typescript
import { env, getApiBaseUrl } from '@/lib/env';

// env is typed and validated
console.log(env.API_BASE_URL);
console.log(getApiBaseUrl()); // Context-aware (server vs client)
```

Missing required variables will throw an error immediately, preventing silent failures.

### Deploying to Vercel

When deploying to Vercel:

1. **Set environment variables in the Vercel dashboard:**
   - Project Settings → Environment Variables
   - Add `API_BASE_URL` and `NEXT_PUBLIC_API_BASE_URL`

2. **Use different values for production:**
   ```
   API_BASE_URL=https://api.myapp.com
   NEXT_PUBLIC_API_BASE_URL=https://api.myapp.com
   ```

3. **No code changes needed** — the environment variables will be automatically loaded.

### Common Gotchas

1. **CORS in Production**: The reverse proxy rewrite only works in development. In production, use absolute URLs with the `apiFetch` helper, which uses `NEXT_PUBLIC_API_BASE_URL`.

2. **NEXT_PUBLIC Prefix**: Only variables prefixed with `NEXT_PUBLIC_` are available to the browser. Server-side-only secrets should not have this prefix.

3. **Edge Runtime Compatibility**: If using Next.js Edge Runtime (e.g., middleware), `API_BASE_URL` won't be available. Use `NEXT_PUBLIC_API_BASE_URL` instead.

4. **Type Safety**: The `apiFetch` helper accepts a generic type for strong response typing:
   ```typescript
   interface Post {
     id: number;
     title: string;
     body: string;
   }
   const post = await apiFetch<Post>('posts/1');
   ```

### Examples

**Server-Side (Server Component):**
```typescript
import { apiFetch } from '@/lib/http';

export default async function Page() {
  const post = await apiFetch<Post>('/api/posts/1', {
    cache: 'no-store',
  });

  return <div>{post.title}</div>;
}
```

**Client-Side (Client Component):**
```typescript
'use client';
import { useState } from 'react';
import { apiFetch } from '@/lib/http';

export default function Component() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const post = await apiFetch<Post>('posts/1');
      setData(post);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  return <button onClick={handleClick}>Fetch Post</button>;
}
```

## License

MIT
