/**
 * HTTP client for API requests.
 * Handles both server-side and client-side requests with proper environment handling.
 */

import { getApiBaseUrl } from './env';

interface ApiError extends Error {
  status: number;
  url: string;
  body?: unknown;
}

function createApiError(response: Response, body: unknown): ApiError {
  const error = new Error(
    `API Error: ${response.status} ${response.statusText}`
  ) as ApiError;
  error.status = response.status;
  error.url = response.url;
  error.body = body;
  return error;
}

function normalizeUrl(path: string): string {
  // Remove leading slash if present
  if (path.startsWith('/')) {
    return path.slice(1);
  }
  return path;
}

/**
 * Fetch helper for making typed API requests.
 *
 * @param path - API path (e.g., 'posts/1' or '/posts/1')
 * @param init - Fetch init options
 * @returns Parsed JSON response
 *
 * @example
 * // Server component
 * const data = await apiFetch('posts/1', { cache: 'no-store' });
 *
 * // Client component (in useEffect)
 * const data = await apiFetch('posts/1');
 */
export async function apiFetch<T = unknown>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const baseUrl = getApiBaseUrl();
  const normalizedPath = normalizeUrl(path);
  const url = `${baseUrl}/${normalizedPath}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });

  // Handle non-2xx responses
  if (!response.ok) {
    let body: unknown;
    try {
      body = await response.json();
    } catch {
      body = await response.text();
    }
    throw createApiError(response, body);
  }

  // Parse and return JSON response
  try {
    return await response.json();
  } catch (error) {
    const err = new Error(`Failed to parse API response from ${url}`);
    if (error instanceof Error) {
      err.cause = error;
    }
    throw err;
  }
}

/**
 * Build absolute API URL from path.
 * Useful for cases where you need the full URL instead of using apiFetch.
 *
 * @param path - API path
 * @returns Full absolute URL
 */
export function getApiUrl(path: string): string {
  const baseUrl = getApiBaseUrl();
  const normalizedPath = normalizeUrl(path);
  return `${baseUrl}/${normalizedPath}`;
}
