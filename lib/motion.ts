import type { Transition, Variants } from "framer-motion"

/**
 * Shared motion vocabulary for the site.
 *
 * Previously each component hand-rolled its own easing/duration tuples
 * (`easeInOut 0.2`, `[0.22,1,0.36,1] 0.8`, CSS `cubic-bezier(0.22,1,0.36,1)
 * 500ms` all coexisted). This module is the single source of truth so the
 * site has one consistent feel.
 *
 * `easings.smooth` matches the CSS `page-enter-active` timing function in
 * globals.css so framer-motion entrances and CSS transitions feel identical.
 */

export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
}

export const durations = {
  fast: 0.2, // hover, micro-interactions
  base: 0.4, // standard entrance
  slow: 0.8, // hero / emphasis
}

export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  } satisfies Variants,
  fadeInUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
  } satisfies Variants,
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  } satisfies Variants,
} satisfies Record<string, Variants>

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren: stagger, delayChildren } },
})

// Route-level transition used by animated-route-transition / page-transition-with-theme.
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: durations.base, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    transition: { duration: durations.fast, ease: easings.inOut },
  },
}

/** Convenience: a hover/tap micro-interaction transition using the site vocab. */
export const microTransition: Transition = {
  duration: durations.fast,
  ease: easings.smooth,
}
