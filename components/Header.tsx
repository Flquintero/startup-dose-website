export default function Header(): JSX.Element {
  return (
    <header
      role="banner"
      className="bg-white dark:bg-slate-900 shadow-sm transition-colors
      duration-200 border-b border-slate-200 dark:border-slate-700"
    >
      <nav role="navigation" className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Startup Dose
          </h1>
        </div>

        <ul className="flex items-center gap-8 list-none">
          <li>
            <a
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900
              dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900
              dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900
              dark:hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
