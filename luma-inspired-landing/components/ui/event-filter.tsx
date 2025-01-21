"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type EventType = "all" | "academic" | "cultural"

interface EventFilterProps {
  onFilterChange: (type: EventType) => void
}

export const EventFilter = ({ onFilterChange }: EventFilterProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<EventType>("all")

  const handleSelect = (type: EventType) => {
    setSelected(type)
    onFilterChange(type)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-md hover:border-gray-700 transition-colors"
      >
        <span className="text-gray-300">{selected.charAt(0).toUpperCase() + selected.slice(1)} Events</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-md overflow-hidden z-[100]">
          <button
            onClick={() => handleSelect("all")}
            className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800/80 transition-colors"
          >
            All Events
          </button>
          <button
            onClick={() => handleSelect("academic")}
            className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800/80 transition-colors"
          >
            Academic Events
          </button>
          <button
            onClick={() => handleSelect("cultural")}
            className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800/80 transition-colors"
          >
            Cultural Events
          </button>
        </div>
      )}
    </div>
  )
}

