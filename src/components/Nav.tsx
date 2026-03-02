'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
]

function DALogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 260 260" fill="none">
      <path d="M137.744 130.264C137.744 148.888 121.328 163 99.056 163H56.048V122.968H76.016V146.488H99.056C110.096 146.488 118.064 140.344 118.064 131.128C118.064 122.104 109.808 115.48 99.056 115.48H56.048L68.72 98.776H99.056C121.52 98.776 137.744 111.736 137.744 130.264Z" fill="currentColor"/>
      <path d="M208.904 163H134.216L146.216 146.488H162.344C166.184 146.488 170.696 146.488 173.768 146.68C172.04 144.376 169.352 140.44 167.24 137.368L155.72 120.376L125.576 163H102.056L143.24 104.92C145.928 101.176 149.864 97.72 156.104 97.72C162.056 97.72 165.992 100.888 168.776 104.92L208.904 163Z" fill="currentColor"/>
      <circle cx="130" cy="130" r="128" stroke="currentColor" strokeWidth="4"/>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="4"/>
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

const sunExitVariants: Variants = {
  exit: {
    y: 6,
    rotate: 90,
    scale: 0.4,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
}

const moonExitVariants: Variants = {
  exit: {
    y: -6,
    rotate: -30,
    scale: 0.4,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
}

const sunEnterVariants: Variants = {
  initial: { y: -8, rotate: -90, scale: 0.4, opacity: 0 },
  animate: {
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1.4] as [number, number, number, number],
    },
  },
}

const moonEnterVariants: Variants = {
  initial: { y: 8, rotate: 30, scale: 0.4, opacity: 0 },
  animate: {
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1.4] as [number, number, number, number],
    },
  },
}

export default function Nav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function handleToggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const isDark = theme === 'dark'

  return (
    <nav className="flex items-center justify-between mb-20">
      <Link
        href="/"
        className="transition-opacity duration-200 hover:opacity-70"
        style={{ color: 'var(--text)' }}
      >
        <DALogo />
      </Link>

      <div className="flex items-center gap-1">
        {links.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-md text-sm transition-all duration-200"
              style={{
                color: isActive ? 'var(--text)' : 'var(--muted)',
                background: isActive ? 'var(--surface)' : 'transparent',
              }}
            >
              {label}
            </Link>
          )
        })}

        {mounted && (
          <motion.button
            onClick={handleToggle}
            className="ml-2 p-1.5 rounded-md overflow-hidden"
            style={{
              color: 'var(--muted)',
              background: 'transparent',
              border: '1px solid var(--border)',
            }}
            whileHover={{ borderColor: 'var(--accent)', color: 'var(--text)' }}
            transition={{ duration: 0.1 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  variants={{ ...sunEnterVariants, ...sunExitVariants }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ display: 'block' }}
                >
                  <SunIcon />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  variants={{ ...moonEnterVariants, ...moonExitVariants }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ display: 'block' }}
                >
                  <MoonIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </div>
    </nav>
  )
}