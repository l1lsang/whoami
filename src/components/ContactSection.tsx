import { contactLinks } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="함께 배우고 만들며 성장하는 개발자가 되고 싶습니다."
          titleId="contact-title"
          description="편하게 연락 주세요."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="rounded-[8px] border border-slate-200 bg-slate-50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <h3 className="text-lg font-bold text-slate-950">{link.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
