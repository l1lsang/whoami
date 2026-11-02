// App.tsx
import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { StickyStage } from './components/shapes/StickyStage'
import { useActiveStep } from './hooks/useActiveStep'
import { useMediaQuery } from './hooks/useMediaQuery'
import type { ProjectId } from './data/projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  const active = useActiveStep('hero')
  const isDesktop = useMediaQuery('(min-width: 960px)')
  const [preview, setPreview] = useState<ProjectId | null>(null)

  // 연락처에 도착하면 페이지는 어두워지고 스테이지는 밝아집니다.
  useEffect(() => {
    document.documentElement.dataset.tone = active === 'contact' ? 'dark' : 'light'
  }, [active])

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Header active={active} />
      <div className="layout">
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Projects onPreview={setPreview} />
          <Skills />
          <Contact />
        </main>
        {isDesktop && <StickyStage formation={preview ?? active} />}
      </div>
      <Footer />
    </>
  )
}

export default App
