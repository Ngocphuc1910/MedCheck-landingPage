import { legalPageOrder, legalPages, type LegalPageContent } from '../legalContent'

export default function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#171717]">
      <header className="border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-5 px-5 py-4">
          <a href="/" className="flex items-center gap-3 text-[#171717] no-underline">
            <img src="/phario_logo.png" alt="Phario" className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-display text-[22px] font-semibold">Phario</span>
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {legalPageOrder.map((path) => (
              <a key={path} href={path} className={`text-[13px] font-semibold transition-colors ${page.slug === legalPages[path].slug ? 'text-[#171717]' : 'text-[#6B7280] hover:text-[#171717]'}`}>
                {legalPages[path].eyebrow}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="bg-white px-5 pb-12 pt-14 md:pt-20">
        <div className="mx-auto max-w-[980px]">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#256D5A]">{page.eyebrow}</p>
          <h1 className="font-display text-[42px] font-medium leading-[1.03] tracking-normal text-[#0A0A0A] md:text-[68px]">{page.title}</h1>
          <p className="mt-5 max-w-[720px] text-[16px] font-medium leading-7 text-[#5F6672]">{page.summary}</p>
          <p className="mt-5 text-[13px] font-semibold text-[#8B95A1]">Last updated: {page.updated}</p>
        </div>
      </section>

      <section className="px-5 py-8 md:py-12">
        <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-[88px] rounded-lg border border-[#E5E7EB] bg-white p-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B95A1]">On this page</p>
              <nav className="space-y-2">
                {page.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-md px-2 py-1.5 text-[13px] font-semibold leading-5 text-[#5F6672] transition-colors hover:bg-[#F1F5F3] hover:text-[#171717]">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-lg border border-[#DDE7E2] bg-[#F4FAF7] p-5 md:p-6">
              <h2 className="mb-4 font-display text-[26px] font-semibold text-[#0A0A0A]">At a glance</h2>
              <ul className="space-y-3">
                {page.glance.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] font-medium leading-6 text-[#34413B]">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#256D5A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {page.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 rounded-lg border border-[#E5E7EB] bg-white p-5 md:p-7">
                <h2 className="font-display text-[30px] font-semibold leading-tight text-[#0A0A0A]">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[15px] font-medium leading-7 text-[#4B5563]">{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] font-medium leading-7 text-[#4B5563]">
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#256D5A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? (
                  <div className="mt-5 overflow-x-auto rounded-lg border border-[#E5E7EB]">
                    <table className="min-w-[820px] w-full border-collapse text-left text-[14px]">
                      <thead className="bg-[#F8FAFC] text-[#374151]">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="border-b border-[#E5E7EB] px-4 py-3 font-bold">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join(':')} className="odd:bg-white even:bg-[#FAFAFA]">
                            {row.map((cell) => (
                              <td key={cell} className="border-b border-[#EEF2F7] px-4 py-3 font-medium leading-6 text-[#4B5563]">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E7EB] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 text-[13px] font-semibold text-[#6B7280] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Phario</span>
          <div className="flex flex-wrap gap-4">
            {legalPageOrder.map((path) => <a key={path} href={path} className="hover:text-[#171717]">{legalPages[path].eyebrow}</a>)}
          </div>
        </div>
      </footer>
    </main>
  )
}
