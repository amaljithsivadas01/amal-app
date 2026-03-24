import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-zinc-900 antialiased">

        <div className="min-h-screen flex flex-col">

          {/* Header */}
          <header className="h-14 backdrop-blur bg-white/70 border-b flex items-center px-4 md:px-6 justify-between">

            <h1 className="font-semibold text-lg">
              Niyam
            </h1>

            {/* Mobile menu icon */}
            <div className="md:hidden">
              ☰
            </div>

          </header>

          <div className="flex flex-1">

            {/* Sidebar (hidden on mobile) */}
            <aside className="hidden md:block w-64 bg-white/80 backdrop-blur border-r p-4">

              <nav className="space-y-2">

                <div className="px-3 py-2 rounded-xl hover:bg-zinc-100 cursor-pointer">
                  Dashboard
                </div>

                <div className="px-3 py-2 rounded-xl hover:bg-zinc-100 cursor-pointer">
                  Calendar
                </div>

                <div className="px-3 py-2 rounded-xl hover:bg-zinc-100 cursor-pointer">
                  Goals
                </div>

                <div className="px-3 py-2 rounded-xl hover:bg-zinc-100 cursor-pointer">
                  Progress
                </div>

              </nav>

            </aside>

            {/* Main */}
            <main className="flex-1 p-4 md:p-8">
              <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                {children}
              </div>
            </main>

          </div>

        </div>

      </body>
    </html>
  );
}