'use client';

import { useState } from 'react';
import { apiFetch } from '@/lib/http';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ApiError extends Error {
  status?: number;
  url?: string;
  body?: unknown;
}

export default function ClientExample(): JSX.Element {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchPost = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // Client-side API call using the apiFetch helper
      // This demonstrates using NEXT_PUBLIC_API_BASE_URL
      const post = await apiFetch<Post>('posts/1');
      setData(post);
    } catch (err) {
      const apiError = err instanceof Error ? (err as ApiError) : new Error('Unknown error');
      setError(apiError);
      console.error('API call failed:', apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Client-Side API Call (apiFetch Helper)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Click the button below to fetch a post using the apiFetch helper with NEXT_PUBLIC_API_BASE_URL:
        </p>

        <button
          onClick={fetchPost}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
          text-white font-medium rounded-lg transition-colors duration-200"
        >
          {loading ? 'Fetching...' : 'Fetch Post from API'}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
            <p className="text-red-800 dark:text-red-200 font-semibold mb-2">Error</p>
            <p className="text-red-700 dark:text-red-300 text-sm mb-2">
              {error.message}
            </p>
            {(error as ApiError).status && (
              <p className="text-red-700 dark:text-red-300 text-sm">
                Status: {(error as ApiError).status}
              </p>
            )}
            <p className="text-red-700 dark:text-red-300 text-sm mt-2 font-mono text-xs">
              Make sure the API is running at localhost:4000
            </p>
          </div>
        )}

        {data && (
          <div className="mt-4 bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="text-slate-900 dark:text-white font-mono text-sm mb-2">
              <strong>ID:</strong> {data.id}
            </p>
            <p className="text-slate-900 dark:text-white font-mono text-sm mb-2">
              <strong>User ID:</strong> {data.userId}
            </p>
            <p className="text-slate-900 dark:text-white font-mono text-sm mb-2">
              <strong>Title:</strong> {data.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
