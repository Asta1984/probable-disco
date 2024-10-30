"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Star = ({ x, y, size, opacity, depth }: { x: number; y: number; size: number; opacity: number; depth: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      x,
      y,
      width: size,
      height: size,
      opacity,
    }}
    animate={{
      x: [x, (x - window.innerWidth / 2) * (1 + depth) + window.innerWidth / 2],
      y: [y, (y - window.innerHeight / 2) * (1 + depth) + window.innerHeight / 2],
      scale: [1, 1 + depth * 2],
      opacity: [0, opacity, opacity, 0],
    }}
    transition={{
      duration: (3 - depth * 2) * 2,
      repeat: Infinity,
      ease: "linear",
    }}
  />
)

export default function Component() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; depth: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 300; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * Math.min(window.innerWidth, window.innerHeight) / 2
        const depth = Math.random()
        newStars.push({
          id: i,
          x: Math.cos(angle) * distance + window.innerWidth / 2,
          y: Math.sin(angle) * distance + window.innerHeight / 2,
          size: Math.random() * 1 + 0.1, 
          opacity: Math.random() * 0.5 + 0.5,
          depth: depth,
        })
      }
      setStars(newStars)
    }

    generateStars()

    window.addEventListener('resize', generateStars)
    return () => window.removeEventListener('resize', generateStars)
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-black to-black opacity-30"></div>
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} size={star.size} opacity={star.opacity} depth={star.depth} />
      ))}
    </div>
  )
}