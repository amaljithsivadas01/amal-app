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
          <header className="h-14 backdrop-blur bg-white/70 border-b flex items-center px-6">
            <h1 className="font-semibold text-lg tracking-tight">
              Niyam
            </h1>
          </header>

          <div className="flex flex-1">

            {/* Sidebar */}
            <aside className="w-64 bg-white/80 backdrop-blur border-r p-4">

              <div className="text-sm text-zinc-500 mb-4">
                MENU
              </div>

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
            <main className="flex-1 p-8">

              <div className="bg-white rounded-2xl shadow-sm p-6">
                {children}
              </div>

            </main>

          </div>

        </div>
      </body>
    </html>
  );
}