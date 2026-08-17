import { ArrowUpRight } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'

export function Footer() {
  return (
    <footer className="border-t border-ink/20 bg-canvas px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-web">End / Portfolio</p>
          <InternalLink href="/#home" className="mt-3 inline-block font-display text-3xl font-medium tracking-[-0.04em] text-ink">
            {portfolioConfig.name}
          </InternalLink>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">게임과 웹, 두 환경에서 사용자가 경험하는 결과물을 만듭니다.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-muted sm:items-end">
          <a
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-ink transition-colors duration-200 hover:border-web hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <p>© {new Date().getFullYear()} {portfolioConfig.name}. React & TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
