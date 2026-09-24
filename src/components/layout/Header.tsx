import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { GitHubIcon } from '../ui/GitHubIcon'
import { InternalLink } from '../ui/InternalLink'

type HeaderProps = {
  currentPath: string
}

export function Header({ currentPath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const mobileNavigationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (currentPath !== '/') {
      return
    }

    const sections = portfolioConfig.navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [currentPath])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    mobileNavigationRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-canvas transition-colors duration-200 ${
        isScrolled || isMenuOpen || currentPath !== '/' ? 'border-ink/20' : 'border-ink/10'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8" aria-label="주요 메뉴">
        <InternalLink
          href="/#home"
          className="group flex items-baseline gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
          ariaLabel={`${portfolioConfig.name} 포트폴리오 홈`}
        >
          <span className="font-display text-xl font-semibold tracking-[-0.04em] text-ink">{portfolioConfig.name}</span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-web sm:block">
            Unity · Web
          </span>
        </InternalLink>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-1">
            {portfolioConfig.navigation.map((item, index) => {
              const isActive = currentPath === '/' && activeSection === item.sectionId
              return (
                <li key={item.sectionId}>
                  <InternalLink
                    href={item.href}
                    ariaCurrent={isActive ? 'location' : undefined}
                    className={`inline-flex h-10 items-center gap-2 px-3 text-xs transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-web ${
                      isActive ? 'text-web' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-muted">0{index + 1}</span>
                    {item.label}
                  </InternalLink>
                </li>
              )
            })}
          </ul>
          <a
            href={portfolioConfig.resumePath}
            download={portfolioConfig.resumeFilename}
            className="inline-flex h-10 items-center gap-2 bg-ink px-4 text-xs font-semibold text-panel transition-colors duration-200 hover:bg-web focus:outline-none focus-visible:ring-2 focus-visible:ring-unity focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            aria-label={`${portfolioConfig.name} 이력서 PDF 다운로드`}
          >
            <Download aria-hidden="true" size={16} />
            이력서
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center border border-ink/20 text-ink transition-colors duration-200 hover:border-web hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-navigation" ref={mobileNavigationRef} className="absolute inset-x-0 top-16 border-b border-ink/20 bg-panel p-4 md:hidden">
          <ul className="border-t border-ink/15">
            {portfolioConfig.navigation.map((item, index) => (
              <li key={item.sectionId} className="border-b border-ink/15">
                <InternalLink
                  href={item.href}
                  onNavigate={() => setIsMenuOpen(false)}
                  className="flex min-h-14 items-center justify-between px-2 text-base text-ink transition-colors duration-200 hover:text-web focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                </InternalLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={portfolioConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 border border-ink/20 px-4 text-sm font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
              aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
            >
              <GitHubIcon aria-hidden="true" size={16} />
              GitHub
            </a>
            <a
              href={portfolioConfig.resumePath}
              download={portfolioConfig.resumeFilename}
              className="flex min-h-12 items-center justify-center gap-2 bg-ink px-4 text-sm font-semibold text-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-unity"
              aria-label={`${portfolioConfig.name} 이력서 PDF 다운로드`}
            >
              <Download aria-hidden="true" size={16} />
              이력서
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
