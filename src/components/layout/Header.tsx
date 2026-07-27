import { useEffect, useRef, useState } from 'react'
import { Code2, Menu, X } from 'lucide-react'
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

  const headerSurface = isScrolled || isMenuOpen || currentPath !== '/'
    ? 'border-white/8 bg-canvas/88 shadow-[0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl'
    : 'border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${headerSurface}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="주요 메뉴">
        <InternalLink
          href="/#home"
          className="group inline-flex items-center gap-3 rounded-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
          ariaLabel={`${portfolioConfig.name} 포트폴리오 홈`}
        >
          <span className="grid size-9 place-items-center border border-white/12 bg-panel text-web transition group-hover:border-web/50">
            <Code2 aria-hidden="true" size={18} strokeWidth={1.8} />
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em]">{portfolioConfig.name}</span>
        </InternalLink>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {portfolioConfig.navigation.map((item) => {
              const isActive = currentPath === '/' && activeSection === item.sectionId
              return (
                <li key={item.sectionId}>
                  <InternalLink
                    href={item.href}
                    ariaCurrent={isActive ? 'location' : undefined}
                    className={`relative inline-flex px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-web ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px bg-web transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                      aria-hidden="true"
                    />
                  </InternalLink>
                </li>
              )
            })}
          </ul>
          <span className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />
          <a
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 border border-white/12 bg-white/[0.03] px-4 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
            aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
          >
            <GitHubIcon aria-hidden="true" size={17} />
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center border border-white/12 bg-panel text-ink transition hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-web md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          ref={mobileNavigationRef}
          className="absolute inset-x-4 top-[80px] border border-white/10 bg-surface p-3 shadow-2xl md:hidden"
        >
          <ul className="space-y-1">
            {portfolioConfig.navigation.map((item, index) => (
              <li key={item.sectionId}>
                <InternalLink
                  href={item.href}
                  onNavigate={() => setIsMenuOpen(false)}
                  className="flex min-h-12 items-center justify-between border border-transparent px-4 text-sm font-medium text-muted transition hover:border-white/10 hover:bg-white/[0.03] hover:text-ink focus:outline-none focus-visible:border-web focus-visible:text-ink"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                </InternalLink>
              </li>
            ))}
          </ul>
          <a
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex min-h-12 items-center justify-center gap-2 bg-ink px-4 text-sm font-semibold text-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
            aria-label={`${portfolioConfig.name} GitHub 새 창에서 열기`}
          >
            <GitHubIcon aria-hidden="true" size={17} />
            GitHub 방문
          </a>
        </div>
      ) : null}
    </header>
  )
}
