import { ArrowUpRight, Code2 } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-canvas px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <InternalLink href="/#home" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <Code2 aria-hidden="true" size={17} className="text-web" />
            {portfolioConfig.name}
          </InternalLink>
          <p className="mt-3 text-sm text-muted">게임과 웹, 두 환경에서 사용자가 경험하는 결과물을 만듭니다.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted sm:items-end">
          <a
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <p>© {new Date().getFullYear()} {portfolioConfig.name}. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
