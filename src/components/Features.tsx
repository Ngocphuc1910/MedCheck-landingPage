import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tabs = [
  {
    value: 'intake',
    label: 'Patient intake',
    heading: 'Patient intake.',
    body: 'Mindoo asks and log in the basics before the patient arrives. Clinicians walk in prepared. Visits feel smoother for everyone.',
    side: 'left' as const,
  },
  {
    value: 'access',
    label: 'Patient access',
    heading: 'Patient access.',
    body: 'Mindoo picks up the calls your team cannot. It helps with bookings and routine questions. Patients get answers. Instantly and in their native language.',
    side: 'right' as const,
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solution" className="bg-white overflow-hidden" ref={ref}>
      <Tabs.Root defaultValue="intake">
        {/* Large centered heading */}
        <motion.div
          className="text-center pt-24 pb-0 px-8"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-bold text-[#171717] leading-[1.0] tracking-[-0.02em]" style={{ fontSize: 88 }}>
            <span className="text-[#171717]">Start where the</span>
            <br />
            <span className="text-[#737373]">pressure is highest.</span>
          </h2>
        </motion.div>

        {/* Tab panels */}
        {tabs.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            <div className={`flex items-center ${tab.side === 'right' ? 'flex-row-reverse' : ''}`} style={{ minHeight: 700 }}>
              {/* Text side */}
              <div className="flex-1 flex justify-center px-16 py-8">
                <div style={{ maxWidth: 320 }}>
                  <h3 className="font-display font-bold text-[#171717] leading-tight tracking-[-0.02em] mb-4" style={{ fontSize: 32 }}>
                    {tab.heading}
                  </h3>
                  <p className="text-[15px] font-medium text-[#737373] leading-6">{tab.body}</p>
                </div>
              </div>

              {/* Phone center */}
              <div className="flex-none flex justify-center" style={{ width: 500 }}>
                <img
                  src="/images/phone-mockup.png"
                  alt="Mindoo app"
                  className="object-contain"
                  style={{ height: 660 }}
                />
              </div>

              {/* Empty side */}
              <div className="flex-1" />
            </div>
          </Tabs.Content>
        ))}

        {/* Tab switcher — below phone */}
        <Tabs.List className="flex justify-center pb-16 gap-2">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="px-5 py-2.5 text-[13px] font-medium rounded-xl border border-[#E5E5E5] text-[#737373] transition-all data-[state=active]:bg-[#0D0D0D] data-[state=active]:text-white data-[state=active]:border-[#0D0D0D]"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </section>
  )
}
