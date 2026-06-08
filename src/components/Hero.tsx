import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white flex flex-col items-center pt-36 pb-0 px-8 relative overflow-hidden"
    >
      {/* Badge */}
      <motion.div {...fadeUp(0)} className="mb-8">
        <span className="text-[11px] font-medium text-[#737373] uppercase tracking-[0.1em]">
          AI Intake &amp; Patient Access Automation
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        {...fadeUp(0.1)}
        className="font-display text-[88px] font-bold text-[#171717] text-center leading-[1.0] tracking-[-0.02em] mb-6 max-w-3xl"
      >
        The help healthcare teams were missing.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-[16px] font-medium text-[#737373] text-center leading-7 mb-10 max-w-md"
      >
        Mindoo takes on the routine tasks, so your team can focus on what
        only humans can do. Intake done. Calls answered. Follow-ups handled.
        You get more capacity with the same team.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div {...fadeUp(0.3)} className="flex items-center gap-2 mb-20">
        <button className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-5 py-2.5 hover:bg-[#404040] transition-colors">
          Book a demo
        </button>
        <button className="text-[13px] font-medium text-[#0D0D0D] bg-white border border-[#E5E5E5] rounded-xl px-5 py-2.5 hover:bg-[#F5F5F5] transition-colors">
          How it works
        </button>
      </motion.div>

      {/* Characters cluster + chat cards */}
      <div className="relative w-full" style={{ height: 420 }}>
        {/* Agent chat card — left edge */}
        <motion.div
          {...fadeUp(0.5)}
          className="absolute left-4 top-8 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{ width: 280 }}
        >
          <div className="w-1 absolute top-0 left-0 bottom-0 bg-[#0059FF]" />
          <div className="pl-4 pr-4 py-4">
            <div className="flex items-center gap-2 mb-3">
              <img src="/images/char-blue-chat.png" alt="" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
              <span className="text-[12px] font-medium text-[#171717]">Max, the Intake agent</span>
            </div>
            <p className="text-[12px] font-medium text-[#737373] leading-5">
              I'm Max from Dr. Johnssons clinic. I'll help you prepare for your appointment today. What's the main reason for your visit today?
            </p>
          </div>
        </motion.div>

        {/* Grouped characters — center */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
          style={{ width: 360 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <img src="/images/char-purple.png" alt="" className="w-20 object-contain mb-2 z-10" style={{ marginRight: -12 }} />
          <img src="/images/char-pink.png" alt="" className="w-24 object-contain mb-4 z-20" style={{ marginRight: -16 }} />
          <img src="/images/char-blue.png" alt="" className="w-44 object-contain z-30" />
          <img src="/images/char-orange.png" alt="" className="w-24 object-contain mb-4 z-20" style={{ marginLeft: -16 }} />
          <img src="/images/char-green.png" alt="" className="w-20 object-contain mb-2 z-10" style={{ marginLeft: -12 }} />
        </motion.div>

        {/* Patient chat card — right edge */}
        <motion.div
          {...fadeUp(0.6)}
          className="absolute right-4 top-8 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{ width: 280 }}
        >
          <div className="w-1 absolute top-0 left-0 bottom-0 bg-[#4AC957]" />
          <div className="pl-4 pr-4 py-4">
            <div className="flex items-center gap-2 mb-3">
              <img src="/images/david-avatar.png" alt="" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
              <span className="text-[12px] font-medium text-[#171717]">David</span>
              <span className="ml-auto text-[10px] text-[#737373] font-medium">00:08</span>
            </div>
            <p className="text-[12px] font-medium text-[#737373] leading-5">
              I've been having headaches for about two weeks now. They're getting worse and worse
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
