import Navbar from '@/components/Navbar';
import ShipAnimation from '@/components/ShipAnimation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface bg-pattern">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-[15%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float delay-300" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-16 text-center">
            {/* Badge - Staggered reveal */}
            <div className="animate-reveal-up delay-0 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-elevated/80 backdrop-blur-sm border border-border mb-10">
              <span className="accent-dot" />
              <span className="text-sm font-medium text-foreground-muted tracking-wide">
                Ship your ideas faster
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-reveal-up delay-150 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[0.95]">
              <span className="text-gradient">Ship</span>
              <span className="text-foreground mx-2">The</span>
              <span className="text-gradient">Vibe</span>
            </h1>

            {/* Subheading */}
            <p className="animate-reveal-up delay-300 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-14 leading-relaxed font-light">
              The ultimate Next.js template for vibe coders. Build modern web apps with{' '}
              <span className="text-accent font-medium">AI</span>,{' '}
              <span className="text-secondary-vivid font-medium">Authentication</span>, and{' '}
              <span className="text-accent-vivid font-medium">Payments</span> — all pre-configured.
            </p>

            {/* CTA Buttons */}
            <div className="animate-reveal-up delay-450 flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link
                href="/auth/signup"
                className="group inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-xl font-medium text-base"
              >
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary rounded-xl font-medium text-base"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Ship Animation */}
          <div className="animate-reveal-scale delay-600">
            <ShipAnimation />
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-28 border-t border-border bg-surface-elevated/30">
          {/* Section decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 accent-line" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Everything you need
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto">
                Start building with production-ready features out of the box.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: 'Secure Authentication',
                  description: 'Built-in Supabase auth with email verification, password reset, and secure session management.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'AI-Powered',
                  description: 'Integrated OpenAI and Gemini APIs. Just type a prompt and get intelligent responses instantly.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Lightning Fast',
                  description: 'Built with Next.js 15, React 19, and TailwindCSS v4 for optimal performance and developer experience.',
                },
              ].map((feature, idx) => (
                <div
                  key={feature.title}
                  className="group relative p-8 card overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Corner accent */}
                  <div className="corner-accent top-left" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-10 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xl font-semibold text-gradient">ShipTheVibe</span>
              <p className="text-sm text-foreground-subtle flex items-center gap-2">
                MIT License 
                <span className="accent-dot" style={{ width: '4px', height: '4px' }} />
                Built with intention
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
