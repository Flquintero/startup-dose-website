import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer role="contentinfo" className="bg-white dark:bg-[#0b0b0d] border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Startup Dose. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-neutral-600 dark:text-neutral-400 hover:text-yellow-400 dark:hover:text-yellow-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
