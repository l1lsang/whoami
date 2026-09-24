import { useEffect, useState } from 'react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'

export function Header({ currentPath }: { currentPath: string }) {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    if (currentPath !== '/') return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((item) => item.isIntersecting)
        if (entry) setActiveSection(entry.target.id)
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 },
    )
    for (const id of [
      'home',
      ...portfolioConfig.navigation.map((item) => item.sectionId),
    ]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [currentPath])
  return (
    <header className="site-header">
      <nav className="section-container header-inner" aria-label="주요 메뉴">
        <InternalLink
          href="/#home"
          className="brand"
          ariaLabel="장경민 포트폴리오 홈"
        >
          <span className="brand-mark" aria-hidden="true">✳</span>
          경민
        </InternalLink>
        <ul className="header-links">
          {portfolioConfig.navigation.map((item) => (
            <li
              key={item.sectionId}
              className={item.sectionId === 'about' ? 'nav-about' : ''}
            >
              <InternalLink
                href={item.href}
                ariaCurrent={
                  currentPath === '/' && activeSection === item.sectionId
                    ? 'location'
                    : undefined
                }
              >
                {item.label}
              </InternalLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
