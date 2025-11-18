interface CompanyData {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  cover_image?: string;
  description?: string;
  appeal?: string;
  website?: string;
}

async function getLatestCompany(): Promise<CompanyData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      console.error('NEXT_PUBLIC_API_BASE_URL is not defined');
      return null;
    }

    const response = await fetch(`${baseUrl}/companies/latest`, {
      cache: 'no-store', // Always get fresh data
    });

    if (!response.ok) {
      console.error(`API request failed: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching latest company:', error);
    return null;
  }
}

export default async function Home(): Promise<JSX.Element> {
  const company = await getLatestCompany();

  // Error state
  if (!company) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0b0d] transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#111] dark:text-white mb-2">
              Today&rsquo;s Startup
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="text-center py-12">
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Unable to load today&rsquo;s startup. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0d] transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-10">
        {/* Centered Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#111] dark:text-white mb-2">
            Today&rsquo;s Startup
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Startup Name */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111] dark:text-white mb-6">
          {company.name}
        </h2>

        {/* Large Featured Image */}
        <div className="relative w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-8 overflow-hidden">
          <img
            src={company.cover_image || "https://startup-dose.s3.us-east-2.amazonaws.com/BlazeImg.png"}
            alt={company.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Website Section */}
        {company.website && (
          <div className="mb-8">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                Website
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-200 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors underline"
            >
              {company.website}
            </a>
          </div>
        )}

        {/* Sections with spacing */}
        <div className="space-y-8">
          {/* Section: What the company does */}
          <section className="space-y-3">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                What the company does
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            {company.description && (
              <div
                className="text-neutral-900 dark:text-neutral-200 leading-relaxed prose prose-neutral dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: String(company.description) }}
              />
            )}
          </section>

          {/* Section: Why we like it */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                Why we like it
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            {company.appeal && (
              <ul
                className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: String(company.appeal) }}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
