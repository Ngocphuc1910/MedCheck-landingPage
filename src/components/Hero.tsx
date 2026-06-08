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
      className="min-h-screen bg-gradient-to-b from-white via-white to-[#F5F5F5] flex flex-col items-center pt-40 pb-0 px-20 relative overflow-hidden"
    >
      {/* Badge */}
      <motion.div {...fadeUp(0)}>
        <div className="bg-white border border-[#E5E5E5] rounded-lg px-3 py-1.5 mb-8 inline-block">
          <span className="text-[9px] font-medium text-[#737373] uppercase tracking-[0.054em]">
            AI intake &amp; patient access automation
          </span>
        </div>
      </motion.div>

      {/* H1 */}
      <motion.h1
        {...fadeUp(0.1)}
        className="text-[72px] font-medium text-[#171717] text-center leading-[80px] tracking-[-0.044em] mb-6 max-w-3xl"
      >
        The help healthcare teams were missing.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-[15px] font-medium text-[#737373] text-center leading-6 mb-10 max-w-lg"
      >
        Mindoo takes on the routine tasks, so your team can focus on what only humans can do. Intake done.
        Calls answered. Follow-ups handled. You get more capacity with the same team.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div {...fadeUp(0.3)} className="flex items-center gap-1 mb-24">
        <button className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-5 py-2.5 hover:bg-[#404040] transition-colors">
          Book a demo
        </button>
        <button className="text-[13px] font-medium text-[#0D0D0D] bg-white border border-[#E5E5E5] rounded-xl px-5 py-2.5 hover:bg-[#F5F5F5] transition-colors">
          How it works
        </button>
      </motion.div>

      {/* Characters + Chat Cards */}
      <div className="relative w-full max-w-5xl" style={{ height: 420 }}>
        {/* Character row */}
        <motion.img
          src="/images/char-green.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-0 left-0 w-40 object-contain"
        />
        <motion.img
          src="/images/char-purple.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-8 left-36 w-28 object-contain"
        />
        <motion.img
          src="/images/char-blue.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 object-contain"
        />
        <motion.img
          src="/images/char-orange.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-8 right-36 w-28 object-contain"
        />
        <motion.img
          src="/images/char-pink.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-0 right-0 w-40 object-contain"
        />

        {/* Agent chat card */}
        <motion.div
          {...fadeUp(0.55)}
          className="absolute left-0 top-0 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0px_2px_8px_rgba(99,99,99,0.2)] p-4 w-[300px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/images/char-blue-chat.png"
              alt=""
              className="w-5 h-5 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-[12px] font-medium text-[#171717]">Max, the Intake agent</span>
          </div>
          <p className="text-[12px] font-medium text-[#737373] leading-5">
            I'm Max from Dr. Johnssons clinic. I'll help you prepare for your appointment today. What's the main
            reason for your visit today?
          </p>
        </motion.div>

        {/* Patient chat card */}
        <motion.div
          {...fadeUp(0.65)}
          className="absolute right-0 top-0 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0px_2px_8px_rgba(99,99,99,0.2)] p-4 w-[280px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/images/david-avatar.png"
              alt=""
              className="w-5 h-5 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-[12px] font-medium text-[#171717]">David</span>
          </div>
          <p className="text-[12px] font-medium text-[#737373] leading-5">
            I've been having headaches for about two weeks now. They're getting worse and worse
          </p>
        </motion.div>
      </div>
    </section>
  )
}
