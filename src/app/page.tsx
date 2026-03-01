'use client'

import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const snap = { duration: 0.1, ease: 'easeOut' as const }

const certifications = [
  { name: 'AZ-900', full: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', color: '#0078d4' },
  { name: 'AZ-104', full: 'Microsoft Azure Administrator', issuer: 'Microsoft', color: '#0078d4' },
  { name: 'AZ-305', full: 'Azure Solutions Architect Expert', issuer: 'Microsoft', color: '#0078d4' },
  { name: 'AWS Essentials', full: 'AWS Cloud Essentials', issuer: 'AWS', color: '#FF9900' },
  { name: 'SAA-C03', full: 'AWS Solutions Architect – Associate', issuer: 'AWS', color: '#FF9900' },
  { name: 'SOA-C02', full: 'AWS SysOps Administrator – Associate', issuer: 'AWS', color: '#FF9900' },
]

const skills = [
  'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions',
  'Azure', 'AWS', 'Linux', 'CI/CD', 'Nginx', 'Ansible',
]

export default function Home() {
  return (
    <div className="space-y-20">

      {/* Hero */}
      <motion.div initial="hidden" animate="show">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6"
          style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(99,102,241,0.3)' }}
          custom={0} variants={fadeUp}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1 className="text-4xl font-semibold tracking-tight mb-2 leading-tight" custom={1} variants={fadeUp}>
          Diogo Almeida
        </motion.h1>

        <motion.p className="text-base mb-6 font-mono" style={{ color: 'var(--accent)' }} custom={2} variants={fadeUp}>
          Cloud & DevOps Engineer
        </motion.p>

        <motion.div className="space-y-3 text-sm leading-relaxed max-w-lg mb-8" style={{ color: 'var(--muted)' }} custom={3} variants={fadeUp}>
          <p>
            Technology enthusiast with a strong passion for continuous learning and innovation.
            Focused on growing in the Cloud and DevOps space, with a particular interest in
            automation, cloud infrastructure, and deployment workflows.
          </p>
          <p>
            Dedicated to bridging the gap between development and operations, and driving
            efficiency in fast-paced, evolving tech environments.
          </p>
        </motion.div>

        <motion.div className="flex gap-3" custom={4} variants={fadeUp}>
          <motion.a
            href="/projects"
            className="px-4 py-2 rounded-md text-sm font-medium"
            style={{ background: 'var(--accent)', color: 'white' }}
            whileHover={{ opacity: 0.85, scale: 1.03, transition: snap }}
            whileTap={{ scale: 0.97, transition: snap }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/diogovalmeida"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-sm font-medium"
            style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}
            whileHover={{ borderColor: 'var(--accent)', scale: 1.03, transition: snap }}
            whileTap={{ scale: 0.97, transition: snap }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
          Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-3 py-1.5 rounded-md text-xs font-medium cursor-default"
              style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.6 + i * 0.04 }}
              whileHover={{ color: 'var(--text)', borderColor: 'var(--accent)', scale: 1.08, transition: snap }}
              whileTap={{ scale: 0.95, transition: snap }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: 'var(--muted)' }}>
          Certifications
        </p>
        <div className="grid grid-cols-1 gap-2.5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="flex items-center gap-4 p-4 rounded-xl cursor-default"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.9 + i * 0.06 }}
              whileHover={{ borderColor: cert.color + '66', x: 4, transition: snap }}
            >
              <div className="w-1 h-7 rounded-full shrink-0" style={{ background: cert.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className="text-sm font-medium font-mono">{cert.name}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ background: cert.color + '1a', color: cert.color }}>
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-xs truncate" style={{ color: 'var(--muted)' }}>{cert.full}</p>
              </div>
              <svg className="w-4 h-4 shrink-0" style={{ color: cert.color + 'cc' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
