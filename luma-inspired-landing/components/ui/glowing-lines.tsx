"use client"

import React, { useEffect, useRef } from "react"

export const GlowingLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Line {
      x: number
      y: number
      angle!: number
      speed!: number
      length!: number
      width!: number
      alpha!: number
      color!: string

      constructor() {
        this.reset()
        // Start from center
        this.x = canvas?.width ? canvas.width / 2 : 0
        this.y = canvas?.height ? canvas.height / 2 : 0
      }

      reset() {
        // Start from center
        this.x = canvas?.width ? canvas.width / 2 : 0
        this.y = canvas?.height ? canvas.height / 2 : 0
        // Random angle
        this.angle = Math.random() * Math.PI * 2
        // Random speed
        this.speed = Math.random() * 2 + 1
        // Random length
        this.length = Math.random() * 100 + 50
        // Random width
        this.width = Math.random() * 1 + 0.5
        // Random alpha
        this.alpha = Math.random() * 0.5 + 0.1
        // Random color (blue/purple gradient)
        const colors = ["#4C1D95", "#2563EB", "#7C3AED", "#1D4ED8"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Move line
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Reset if out of bounds
        if (
          this.x < -this.length ||
          (canvas && this.x > canvas.width + this.length) ||
          this.y < -this.length ||
          (canvas && this.y > canvas.height + this.length)
        ) {
          this.reset()
        }
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length)
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.width
        ctx.globalAlpha = this.alpha
        ctx.stroke()
      }
    }

    // Create lines
    const lines: Line[] = []
    for (let i = 0; i < 100; i++) {
      lines.push(new Line())
    }

    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw lines
      lines.forEach((line) => {
        line.update()
        line.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

