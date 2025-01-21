import { GlowingLines } from "@/components/ui/glowing-lines"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GlowingLines />

      <div className="relative z-10">
        <nav className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <span className="text-xl font-bold">Tech Events</span>
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full aspect-[600/450] rounded-lg overflow-hidden">
            <iframe
              src="https://lu.ma/embed/event/evt-D6VfyFtON4kp7d0/simple"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: "1px solid rgba(191, 203, 218, 0.533)",
                borderRadius: "4px",
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </main>

        <footer className="border-t border-gray-800/50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Tech Events. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

