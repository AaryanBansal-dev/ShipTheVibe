import Navbar from '@/components/Navbar';
import ShipAnimation from '@/components/ShipAnimation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 mb-8">
              <span className="animate-pulse-soft">🚀</span>
              <span className="text-sm font-medium text-zinc-400">
                Ship your ideas faster
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Ship</span>
              <span className="text-white">The</span>
              <span className="gradient-text">Vibe</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              The ultimate Next.js template for vibe coders. Build modern web apps with{' '}
              <span className="text-blue-400 font-semibold">AI</span>,{' '}
              <span className="text-purple-400 font-semibold">Authentication</span>, and{' '}
              <span className="text-pink-400 font-semibold">Payments</span> — all pre-configured.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Ship Animation */}
          <ShipAnimation />
        </div>

        {/* Features Section */}
        <section className="relative py-24 bg-zinc-900/50 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: 'Secure Authentication',
                  description: 'Built-in Supabase auth with email verification, password reset, and secure session management.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'AI-Powered',
                  description: 'Integrated OpenAI and Gemini APIs. Just type a prompt and get intelligent responses instantly.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Lightning Fast',
                  description: 'Built with Next.js 15, React 19, and TailwindCSS v4 for optimal performance and developer experience.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-zinc-800/30 rounded-2xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xl font-bold gradient-text">ShipTheVibe</span>
              <p className="text-sm text-zinc-500">MIT License • Built with 💜</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
