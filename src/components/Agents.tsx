import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const agents = [
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
  {
    name: 'Custom agent',
    char: '/images/agent-custom.png',
    description: 'Custom to your workflows. Teams simply describe what they need, and the agent follows.',
    button: 'Try now',
  },
]

export default function Agents() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="agents" className="bg-[#F5F5F5] py-32" ref={ref}>
      {/* Heading */}
      <motion.div
        className="max-w-[1280px] mx-auto px-20 mb-20"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-[58px] font-medium leading-[64px] tracking-[-0.044em]">
          <span className="text-[#171717]">You don't need everything on day one. </span>
          <span className="text-[#737373]">Add AI agents as your team needs them.</span>
        </h2>
      </motion.div>

      {/* Carousel with fade masks */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 px-20" style={{ paddingTop: 80 }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex-none w-[280px] bg-[#E5E5E5] rounded-2xl px-5 pb-6 relative"
              style={{ paddingTop: 100 }}
            >
              <img
                src={agent.char}
                alt={agent.name}
                className="absolute left-1/2 -translate-x-1/2 object-contain"
                style={{ width: 140, top: -56 }}
              />
              <h3 className="text-[17px] font-medium text-[#171717] leading-6 tracking-[-0.04em] mb-2">
                {agent.name}
              </h3>
              <p className="text-[13px] font-medium text-[#737373] leading-5 mb-5">
                {agent.description}
              </p>
              <button className="text-[13px] font-medium text-[#0D0D0D] border border-[#0D0D0D]/30 rounded-xl px-4 py-2 hover:bg-[#0D0D0D] hover:text-white hover:border-[#0D0D0D] transition-colors">
                {agent.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="max-w-[1280px] mx-auto px-20 mt-6">
        <p className="text-[9px] font-medium text-[#737373] uppercase tracking-[0.054em]">
          Mindoo is the only agent platform that lets clinicians shape their own agents, inside a safe and governed
          infrastructure.
        </p>
      </div>
    </section>
  )
}
