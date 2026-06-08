import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tabs = [
  {
    value: 'intake',
    label: 'Patient intake',
    heading: 'Patient intake.',
    body: 'Mindoo asks and logs the basics before the patient arrives. Clinicians walk in prepared. Visits feel smoother for everyone.',
    screen: '/images/screen-intake.png',
  },
  {
    value: 'access',
    label: 'Patient access',
    heading: 'Patient access.',
    body: 'Mindoo picks up the calls your team cannot. It helps with bookings and routine questions. Patients get answers. Instantly and in their native language.',
    screen: '/images/screen-access.png',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solution" className="bg-white py-32 px-20" ref={ref}>
      <div className="max-w-[1280px] mx-auto flex items-start gap-20">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-md pt-4"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[58px] font-medium text-[#171717] leading-[64px] tracking-[-0.044em]">
            Start where the pressure is highest.
          </h2>
        </motion.div>

        {/* Right — Tabs */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Tabs.Root defaultValue="intake">
            <Tabs.List className="flex gap-2 mb-10">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="px-4 py-2 text-[13px] font-medium rounded-xl border border-[#E5E5E5] text-[#737373] transition-all data-[state=active]:bg-[#0D0D0D] data-[state=active]:text-white data-[state=active]:border-[#0D0D0D]"
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value}>
                <div className="flex gap-10 items-start">
                  <div className="flex-1">
                    <h3 className="text-[36px] font-medium text-[#171717] leading-[42px] tracking-[-0.044em] mb-4">
                      {tab.heading}
                    </h3>
                    <p className="text-[15px] font-medium text-[#525252] leading-6">{tab.body}</p>
                  </div>
                  <div className="w-48 flex-shrink-0">
                    <img
                      src={tab.screen}
                      alt={tab.heading}
                      className="w-full rounded-2xl shadow-xl border border-[#E5E5E5]"
                    />
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </motion.div>
      </div>
    </section>
  )
}
