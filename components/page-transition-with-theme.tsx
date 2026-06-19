"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { pageTransition } from "@/lib/motion"

interface PageTransitionWithThemeProps {
  children: ReactNode
}

export function PageTransitionWithTheme({ children }: PageTransitionWithThemeProps) {
  // Theme is now driven by next-themes (class on <html>); the previous
  // MutationObserver that sniffed for the `.inverted` class is gone.
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}
