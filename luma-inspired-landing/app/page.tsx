"use client"

import { useState } from "react"
import { GlowingLines } from "@/components/ui/glowing-lines"
import { EventCard } from "@/components/ui/event-card"
import { EventFilter } from "@/components/ui/event-filter"

const events = [
  {
    id: 1,
    title: "AI Mayhem",
    date: "Saturday, April 20",
    time: "10:00 AM - Apr 22, 3:00 PM",
    location: "Zo House, Bengaluru, Karnataka",
    host: "BLRxZo",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OOPwuDiTGetbnPviWoIJr2v4wpkySk.png",
    isPast: false,
    type: "academic",
  },
  {
    id: 2,
    title: "Kota Goon Sesh",
    date: "Thursday, January 9",
    time: "10:00 PM - Jan 12, 10:00 PM GMT+5:30",
    location: "Kota, Karnataka",
    host: "Arnav Jain",
    imageUrl:
      "https://sjc.microlink.io/HH29R_xGaSSU9cOpYResE87KETanyiIvhRhuvHGnJaERa1zptRawh7swu-O_dOAfB_cflfyCVPDO0BF80NLvZg.jpeg",
    isPast: true,
    type: "cultural",
  },
  {
    id: 3,
    title: "Tech Innovators Meetup",
    date: "Friday, February 15",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Hub, Bengaluru",
    host: "Tech Community BLR",
    imageUrl: "/placeholder.svg?height=400&width=600",
    isPast: false,
    type: "academic",
  },
] as const

export default function Home() {
  const [filter, setFilter] = useState<"all" | "academic" | "cultural">("all")

  const filteredEvents = events.filter((event) => (filter === "all" ? true : event.type === filter))

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GlowingLines />

      <div className="relative z-10">
        <nav className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <span className="text-xl font-bold">Tech Events</span>
              <EventFilter onFilterChange={setFilter} />
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
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

