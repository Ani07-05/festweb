import React from "react"
import { CalendarDays, MapPin, User } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  host: string
  imageUrl: string
  isPast?: boolean
}

export const EventCard = ({ title, date, time, location, host, imageUrl, isPast = false }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image Container */}
        <div className="w-full md:w-72 h-64 md:h-auto shrink-0 overflow-hidden rounded-lg">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 gap-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors">{title}</h3>

            <div className="flex items-center gap-2 text-gray-400">
              <User className="w-4 h-4" />
              <span className="text-sm">Hosted by {host}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm uppercase">{date}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm">{time}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>

          {/* Registration Status */}
          <div className="mt-auto space-y-4">
            {isPast ? (
              <div className="flex items-center gap-2 text-gray-400">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-500" />
                <span className="text-sm font-medium">Past Event</span>
              </div>
            ) : (
              <button className="w-full md:w-auto px-6 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-md font-medium transition-colors">
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

