export default function Home(): JSX.Element {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111] dark:text-white mb-2">
          Blaze
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
          (blaze.money)
        </p>

        {/* Large Featured Image */}
        <div className="relative w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-8 overflow-hidden">
          <img
            src="https://uploads.linear.app/2f024a2b-5bcd-4bb8-b029-31c8331af6b6/34447bcf-6631-46d4-90fb-21cbc492c2dd/38d1feec-502f-4b08-8b48-591308a3d7fa"
            alt="Blaze"
            className="w-full h-full object-cover"
          />
        </div>

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
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              Blaze is basically a <strong>global Venmo for cross-border payments</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>
                It&rsquo;s a peer-to-peer payments app that uses <strong>USDC (a U.S. dollar stablecoin)</strong> under the hood so people can send money <strong>instantly and with very low fees</strong> between countries.
              </li>
              <li>
                They&rsquo;re focused on <strong>digital nomads, expats, and remote workers</strong> who need to pay rent, tutors, freelancers, or friends in another country without the usual bank friction.
              </li>
              <li>
                The app has a <strong>social payments feed</strong> (like Venmo) plus features like payment links for freelancers and vendors, and support for <strong>34+ countries</strong> across North and Latin America (and expanding).
              </li>
            </ul>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              In short: send and receive money globally, nearly free, from your phone, in a very consumer-friendly UI.
            </p>
          </section>

          {/* Section: Why we like it */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                Why we like it
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-200 mb-1">
                  Clear, painful problem
                </h3>
                <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
                  Cross-border payments are still a mess: slow, expensive, and confusing. Blaze is going after a real, daily pain for people who live/work between countries (exactly the kind of focused use case investors like).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-200 mb-1">
                  Strong, credible wedge
                </h3>
                <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
                  Their wedge is <strong>USDC + P2P + social</strong>: stablecoin rails for speed and cost, wrapped in a simple &ldquo;Venmo-style&rdquo; app. That combo is much easier to explain to normal users than &ldquo;open a crypto wallet and manage addresses.&rdquo;
                </p>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-200 mb-1">
                  Founder–problem fit
                </h3>
                <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
                  The founders are literally international nomads who struggled with this themselves; they&rsquo;ve built and scaled startups before (including one to $1M ARR and a #1 App Store hit) and have backgrounds at Spotify, Artsy, Bitpanda, etc. That&rsquo;s a good mix of product, design, and fintech experience.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-200 mb-1">
                  YC + solid early traction
                </h3>
                <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
                  They&rsquo;re a <strong>YC S24</strong> company, already live in the US and Mexico with thousands of users, and actively hiring&mdash;nice signals for momentum without being &ldquo;too big&rdquo; yet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
