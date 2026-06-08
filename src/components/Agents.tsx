import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const agents = [
  {
    name: 'Custom agent',
    char: '/images/agent-custom.png',
    description: 'Custom to your workflows. Teams simply describe what they need, and the agent follows.',
    button: 'Try now',
  },
  {
    name: 'Follow-up agent',
    char: '/images/agent-lisa.png',
    description: 'Checks in after visits and monitors recovery. Alerts your team if something needs attention.',
    button: 'Try Lisa',
  },
  {
    name: 'Scribe agent',
    char: '/images/agent-jimmy.png',
    description: 'Drafts notes, letters and orders. Finds the details clinicians need. In seconds.',
    button: 'Try Jimmy',
  },
  {
    name: 'Intake agent',
    char: '/images/agent-max.png',
    description: 'Collects symptoms and history before the visit. Prepares a clear summary for the clinician.',
    button: 'Try Max',
  },
  {
    name: 'Reception agent',
    char: '/images/agent-sara.png',
    description: 'Answers routine calls. Handles bookings, rescheduling and simple requests.',
    button: 'Try Sara',
  },
]

export default function Agents() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState(1)

  const prev = () => setActive((a) => Math.max(0, a - 1))
  const next = () => setActive((a) => Math.min(agents.length - 1, a + 1))

  return (
    <section id="agents" className="bg-[#F5F5F5] py-24 overflow-hidden" ref={ref}>
      {/* Heading — centered */}
      <motion.div
        className="text-center px-8 mb-20"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display font-bold leading-[1.05] tracking-[-0.02em] max-w-2xl mx-auto" style={{ fontSize: 52 }}>
          <span className="text-[#171717]">You don't need everything on day one. </span>
          <span className="text-[#737373]">Add AI agents as your team needs them.</span>
        </h2>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 justify-center" style={{ paddingTop: 80, paddingBottom: 16 }}>
          {agents.map((agent, i) => {
            const isCenter = i === active
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                onClick={() => setActive(i)}
                className="flex-none bg-white rounded-2xl px-6 pb-6 relative cursor-pointer transition-all"
                style={{
                  width: 280,
                  paddingTop: 96,
                  opacity: Math.abs(i - active) > 1 ? 0.4 : 1,
                  transform: `scale(${isCenter ? 1 : 0.95})`,
                }}
              >
                <img
                  src={agent.char}
                  alt={agent.name}
                  className="absolute left-1/2 -translate-x-1/2 object-contain"
                  style={{ width: 120, top: -52 }}
                />
                <h3 className="font-display font-bold text-[#171717] leading-tight tracking-[-0.01em] mb-2" style={{ fontSize: 20 }}>
                  {agent.name}
                </h3>
                <p className="text-[13px] font-medium text-[#737373] leading-5 mb-5">
                  {agent.description}
                </p>
                <button className="w-full text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl py-2.5 hover:bg-[#404040] transition-colors">
                  {agent.button}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Progress + arrows */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full border border-[#D4D4D4] flex items-center justify-center hover:border-[#171717] transition-colors"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7l4-4" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-1 items-center">
          {agents.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all rounded-full bg-[#171717]"
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                opacity: i === active ? 1 : 0.2,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 rounded-full border border-[#D4D4D4] flex items-center justify-center hover:border-[#171717] transition-colors"
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Tagline */}
      <p className="text-center text-[9px] font-medium text-[#737373] uppercase tracking-[0.1em] mt-8 px-8">
        Mindoo is the only agent platform that lets clinicians shape their own agents,<br />
        inside a safe and governed infrastructure.
      </p>
    </section>
  )
}
