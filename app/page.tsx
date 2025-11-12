import Header from '@/components/Header';
import ThemeToggle from '@/components/ThemeToggle';
import ClientExample from '@/components/ClientExample';
import { apiFetch } from '@/lib/http';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPostFromApi(): Promise<Post | null> {
  try {
    // Server-side API call using the proxy rewrite
    // This calls /api/posts/1 which is rewritten to API_BASE_URL/posts/1
    const post = await apiFetch<Post>('/api/posts/1', {
      cache: 'no-store',
    });
    return post;
  } catch (error) {
    console.error('Failed to fetch post from API:', error);
    return null;
  }
}

export default async function Home(): Promise<JSX.Element> {
  const post = await getPostFromApi();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Welcome to Startup Dose
          </h1>
          <ThemeToggle />
        </div>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
          Get insights, strategies, and resources to scale your startup. Learn from industry
          leaders and stay ahead of the curve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm
            hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Growth Tips
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Discover proven strategies to accelerate your startup growth and reach product-market
              fit.
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm
            hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Industry Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Stay informed with the latest trends, market analysis, and industry updates.
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm
            hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Resources
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Access curated tools, templates, and resources to support your entrepreneurial
              journey.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              API Integration Examples
            </h2>

            {post ? (
              <div
                className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border
                border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Server-Side API Call (Proxy Rewrite)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  This post was fetched on the server using the proxy rewrite pattern:
                </p>
                <div className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-900 dark:text-white font-mono text-sm mb-2">
                    <strong>ID:</strong> {post.id}
                  </p>
                  <p className="text-slate-900 dark:text-white font-mono text-sm mb-2">
                    <strong>Title:</strong> {post.title}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {post.body}
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <p className="text-amber-800 dark:text-amber-200">
                  Could not fetch post from server. Make sure the API is running at localhost:4000.
                </p>
              </div>
            )}
          </div>

          <ClientExample />
        </div>
      </div>
    </div>
  );
}
