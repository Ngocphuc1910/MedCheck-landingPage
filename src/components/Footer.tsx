export default function Footer() {
  const navLinks = ['Home', 'Problem', 'Solution', 'Agents']
  const legalLinks = ['Privacy Policy', 'Terms of Service']

  return (
    <footer className="bg-white p-6">
      <div className="bg-[#F5F5F5] rounded-2xl px-10 py-8 relative overflow-hidden" style={{ minHeight: 220 }}>
        <div className="flex items-start justify-between relative z-10">
          {/* Left: logo */}
          <div>
            <img
              src="/images/logo-footer.svg"
              alt="Mindoo"
              className="object-contain object-left"
              style={{ width: 160, height: 32 }}
            />
          </div>

          {/* Right: link columns */}
          <div className="flex gap-16">
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.052em] mb-4">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.052em] mb-4">
                Legal
              </p>
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#0059FF] uppercase tracking-[0.052em] mb-4">
                Social
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer character illustration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <img
            src="/images/footer-char.png"
            alt=""
            className="object-contain object-bottom"
            style={{ height: 180 }}
          />
        </div>
      </div>
    </footer>
  )
}
