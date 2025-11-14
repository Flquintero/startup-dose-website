export default function Header(): JSX.Element {
  return (
    <header role="banner" className="bg-white dark:bg-[#0b0b0d] transition-colors duration-200">
      <nav role="navigation" className="container mx-auto px-4 py-2">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Startup Dose Logo" className="w-[150px] h-auto" />
        </div>
      </nav>
    </header>
  );
}
