'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const snap = { duration: 0.1, ease: 'easeOut' as const }

const active = [
  {
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    stack: ['Stack', 'Stack', 'Stack'],
    github: 'https://github.com/diogovalmeida',
    details: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam quis nostrud',
    ],
  },
  {
    title: 'Project Title',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.',
    stack: ['Stack', 'Stack', 'Stack', 'Stack'],
    github: 'https://github.com/diogovalmeida',
    details: [
      'Excepteur sint occaecat cupidatat non proident',
      'Sunt in culpa qui officia deserunt mollit anim',
      'Lorem ipsum dolor sit amet consectetur',
    ],
  },
]

const finished = [
  {
    title: 'Project Title',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget.',
    stack: ['Stack', 'Stack', 'Stack'],
    github: 'https://github.com/diogovalmeida',
    details: [
      'Pellentesque habitant morbi tristique senectus',
      'Vestibulum tortor quam feugiat vitae ultricies',
      'Lorem ipsum dolor sit amet consectetur adipiscing',
    ],
  },
  {
    title: 'Project Title',
    description: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed.',
    stack: ['Stack', 'Stack', 'Stack', 'Stack'],
    github: 'https://github.com/diogovalmeida',
    details: [
      'Aenean ultricies mi vitae est mauris placerat',
      'Quisque sit amet est et sapien ullamcorper',
      'Vestibulum erat wisi condimentum sed commodo',
    ],
  },
]

const comingSoon = [
  {
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    stack: ['Stack', 'Stack', 'Stack'],
  },
  {
    title: 'Project Title',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    stack: ['Stack', 'Stack', 'Stack'],
  },
]

const sectionMeta = {
  active:   { label: 'In Progress',  dot: '#f59e0b', badge: { background: 'rgba(245,158,11,0.1)',  color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)'  } },
  finished: { label: 'Completed',    dot: '#22c55e', badge: { background: 'rgba(34,197,94,0.1)',   color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)'   } },
  soon:     { label: 'Coming Soon',  dot: '#6b7280', badge: { background: 'rgba(107,114,128,0.1)', color: '#6b7280', border: '1px solid rgba(107,114,128,0.25)' } },
}

function ProjectCard({ project, index, dotColor }: {
  project: { title: string; description: string; stack: string[]; github: string; details: string[] }
  index: number
  dotColor: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      whileHover={{ borderColor: dotColor + '55', y: -3, transition: snap }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dotColor }} />
            <h2 className="text-sm font-medium">{project.title}</h2>
          </div>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs shrink-0"
            style={{ color: 'var(--muted)' }}
            whileHover={{ color: 'var(--text)', transition: snap }}
          >
            GitHub ↗
          </motion.a>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          {project.description}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.button
            onClick={() => setOpen(!open)}
            className="text-xs shrink-0"
            style={{ color: 'var(--muted)' }}
            whileHover={{ color: 'var(--text)', transition: snap }}
          >
            {open ? 'Less ↑' : 'Details ↓'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                What it includes
              </p>
              <ul className="space-y-2">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: dotColor }} className="mt-0.5 shrink-0">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function SectionLabel({ meta }: { meta: typeof sectionMeta.active }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium" style={meta.badge}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.dot }} />
        {meta.label}
      </span>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Projects</h1>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          What I'm building, have completed, and planning to do.
        </p>
      </motion.div>

      {/* In Progress */}
      <div className="mb-12">
        <SectionLabel meta={sectionMeta.active} />
        <div className="flex flex-col gap-4">
          {active.map((p, i) => <ProjectCard key={i} project={p} index={i} dotColor={sectionMeta.active.dot} />)}
        </div>
      </div>

      {/* Completed */}
      <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <SectionLabel meta={sectionMeta.finished} />
        <div className="flex flex-col gap-4">
          {finished.map((p, i) => <ProjectCard key={i} project={p} index={i} dotColor={sectionMeta.finished.dot} />)}
        </div>
      </motion.div>

      {/* Coming Soon */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <SectionLabel meta={sectionMeta.soon} />
        <div className="flex flex-col gap-3">
          {comingSoon.map((item, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--border)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              whileHover={{ opacity: 0.8, transition: snap }}
            >
              <h3 className="text-sm font-medium mb-1" style={{ color: 'var(--muted)' }}>{item.title}</h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)', opacity: 0.6 }}>{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.stack.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded" style={{ color: 'var(--muted)', opacity: 0.5, border: '1px solid var(--border)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
