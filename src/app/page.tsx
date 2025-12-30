export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 font-sans dark:from-gray-900 dark:to-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-8 py-16 px-8 sm:py-32 sm:px-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-6xl">
            ShipTheVibe
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Vibe Coder&apos;s Dream Template
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">⚡ Next.js + TypeScript</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Modern React framework with type safety</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">🎨 TailwindCSS</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Utility-first CSS for rapid styling</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">🗄️ Supabase</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Backend, database, and authentication</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">🔌 tRPC</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">End-to-end typesafe APIs</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">🐳 Docker</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Container-ready for deployment</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">🧪 Testing</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Jest + React Testing Library</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700 sm:w-auto"
            href="https://github.com/AaryanBansal-dev/ShipTheVibe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-zinc-300 px-6 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
