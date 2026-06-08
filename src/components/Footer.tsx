export default function Footer() {
  const navLinks = ['Home', 'Problem', 'Solution', 'Agents']
  const legalLinks = ['Privacy Policy', 'Terms of Service']

  return (
    <footer className="bg-white px-6 pb-6">
      <div
        className="bg-[#F5F5F5] rounded-3xl relative overflow-hidden"
        style={{ minHeight: 320 }}
      >
        {/* Top bar: logo + links */}
        <div className="flex items-start justify-between px-10 pt-8 relative z-10">
          {/* Logo */}
          <img
            src="/images/logo-footer.svg"
            alt="Mindoo"
            className="object-contain object-left"
            style={{ width: 140, height: 28 }}
          />

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.08em] mb-4">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.08em] mb-4">Legal</p>
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.08em] mb-4">Social</p>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large centered character — blue heart on cloud */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <img
            src="/images/footer-char.png"
            alt=""
            className="object-contain object-bottom"
            style={{ height: 260, maxWidth: 520 }}
          />
        </div>
      </div>
    </footer>
  )
}
