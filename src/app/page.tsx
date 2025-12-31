export default function Home() {
  const features = [
    {
      icon: '⚡',
      title: 'Next.js 15 + TypeScript',
      description: 'Latest React framework with full type safety and App Router',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎨',
      title: 'TailwindCSS v4',
      description: 'Utility-first CSS for rapid, responsive UI development',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: '🗄️',
      title: 'Supabase',
      description: 'Open source Firebase alternative for auth & database',
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: '🔌',
      title: 'tRPC',
      description: 'End-to-end typesafe APIs without code generation',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🤖',
      title: 'AI Ready',
      description: 'Integrated OpenAI & Gemini API configurations',
      gradient: 'from-emerald-500 to-purple-500',
    },
    {
      icon: '💳',
      title: 'Polar Payments',
      description: 'Modern payment processing for SaaS products',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🐳',
      title: 'Docker Ready',
      description: 'Containerized deployment with Docker & Compose',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: '🚀',
      title: 'Bun Package Manager',
      description: 'Blazing fast JavaScript runtime and package manager',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: '🧪',
      title: 'Testing Suite',
      description: 'Jest + React Testing Library for reliable tests',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  const techStack = [
    { name: 'Next.js', version: '15' },
    { name: 'React', version: '19' },
    { name: 'TypeScript', version: '5' },
    { name: 'TailwindCSS', version: '4' },
    { name: 'Bun', version: '1.0+' },
    { name: 'Supabase', version: '2' },
    { name: 'tRPC', version: '11' },
    { name: 'Zod', version: '3' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float delay-300" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 mb-8 shadow-lg">
              <span className="animate-pulse-soft">🚀</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Ready to ship in minutes
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Ship</span>
              <span className="text-zinc-900 dark:text-white">The</span>
              <span className="gradient-text">Vibe</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              The ultimate Next.js template for vibe coders. Build modern web apps with 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> AI</span>,
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> Payments</span>, and
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> Authentication</span> — all pre-configured.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/AaryanBansal-dev/ShipTheVibe"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Get Started
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Documentation
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack Bar */}
      <section className="relative py-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                  v{tech.version}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Pre-configured with the best tools and frameworks for modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-2xl mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 bg-zinc-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Quick Start
            </h2>
            <p className="text-lg text-zinc-400">
              Get up and running in seconds with Bun
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
              <p className="text-sm text-zinc-400 mb-3 font-medium">Clone the repository</p>
              <code className="block text-green-400 font-mono text-sm overflow-x-auto">
                git clone https://github.com/AaryanBansal-dev/ShipTheVibe.git
              </code>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
              <p className="text-sm text-zinc-400 mb-3 font-medium">Install dependencies with Bun</p>
              <code className="block text-green-400 font-mono text-sm overflow-x-auto">
                cd ShipTheVibe && bun install
              </code>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
              <p className="text-sm text-zinc-400 mb-3 font-medium">Start the development server</p>
              <code className="block text-green-400 font-mono text-sm overflow-x-auto">
                bun run dev
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* What&apos;s Included Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              A complete foundation for your next project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📦', title: 'UI Components', items: ['Button', 'Card', 'Input', 'Modal', 'Alert', 'Badge', 'Avatar', 'Loading'] },
              { icon: '🪝', title: 'Custom Hooks', items: ['useLocalStorage', 'useDebounce', 'useMediaQuery', 'useToggle', 'useClickOutside', 'useClipboard'] },
              { icon: '🛠️', title: 'Utilities', items: ['cn (className merge)', 'formatDate', 'formatCurrency', 'tryCatch', 'sleep', 'truncate'] },
              { icon: '📝', title: 'Type Definitions', items: ['User', 'ApiResponse', 'Pagination', 'Toast', 'FormField', 'NavItem', 'Feature'] },
            ].map((section, index) => (
              <div
                key={section.title}
                className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{section.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-mono text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-100/50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold gradient-text">ShipTheVibe</span>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                v0.1.0
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="https://github.com/AaryanBansal-dev/ShipTheVibe" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Docs
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Twitter
              </a>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              MIT License • Built with 💜
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
