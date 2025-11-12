/**
 * Environment variable loader and validator.
 * Ensures required API configuration is present at runtime.
 */

interface EnvConfig {
  API_BASE_URL: string;
  NEXT_PUBLIC_API_BASE_URL: string;
}

function validateEnv(): EnvConfig {
  const apiBaseUrl = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
  const nextPublicApiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error(
      'Missing environment variable: API_BASE_URL or NEXT_PUBLIC_API_BASE_URL'
    );
  }

  if (!nextPublicApiBaseUrl) {
    throw new Error(
      'Missing environment variable: NEXT_PUBLIC_API_BASE_URL or API_BASE_URL'
    );
  }

  return {
    API_BASE_URL: apiBaseUrl,
    NEXT_PUBLIC_API_BASE_URL: nextPublicApiBaseUrl,
  };
}

/**
 * Typed environment configuration object.
 * Validated at module load time to catch issues early.
 */
export const env: EnvConfig = validateEnv();

/**
 * Get API base URL appropriate for the current context.
 * - Server-side: uses API_BASE_URL (can be internal)
 * - Client-side: uses NEXT_PUBLIC_API_BASE_URL (must be public)
 */
export function getApiBaseUrl(): string {
  if (typeof window === 'undefined') {
    // Server-side: prefer API_BASE_URL, fallback to NEXT_PUBLIC_API_BASE_URL
    return env.API_BASE_URL;
  }

  // Client-side: use NEXT_PUBLIC_API_BASE_URL
  return env.NEXT_PUBLIC_API_BASE_URL;
}
