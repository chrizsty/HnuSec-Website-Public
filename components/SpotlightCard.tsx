"use client"

import React, { useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`
  /**
   * Optional surface treatment for cards that don't supply their own
   * border/background via `className`. Most call sites pass a full className
   * and leave this unset.
   */
  theme?: "dark" | "light"
}

/**
 * Card with a pointer-following radial spotlight overlay.
 *
 * Unified from the previous two implementations (SpotlightCard.tsx with a
 * `theme` prop and spotlight-card.tsx without). The visible spotlight uses
 * the 600px-gradient + full-opacity behavior from the lowercase variant
 * (the one archives/recruitment actually rendered).
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(107, 107, 255, 0.15)",
  theme,
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState<number>(0)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  const themeClasses =
    theme === "dark"
      ? "border-neutral-800 bg-neutral-900"
      : theme === "light"
        ? "border-gray-200 bg-white"
        : ""

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden rounded-xl ${themeClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "default" }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export default SpotlightCard
