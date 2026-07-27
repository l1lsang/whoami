import { lazy, Suspense, useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { portfolioConfig } from './config/portfolio'
import { getProjectBySlug } from './data/projects'
import { NAVIGATION_EVENT } from './lib/navigation'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })),
)

function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

function setMetadata(title: string, description: string) {
  document.title = title
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)
  const projectMatch = currentPath.match(/^\/projects\/([^/]+)$/)
  const project = projectMatch ? getProjectBySlug(decodeURIComponent(projectMatch[1])) : undefined

  useEffect(() => {
    function handleNavigation() {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener('popstate', handleNavigation)
    window.addEventListener(NAVIGATION_EVENT, handleNavigation)
    return () => {
      window.removeEventListener('popstate', handleNavigation)
      window.removeEventListener(NAVIGATION_EVENT, handleNavigation)
    }
  }, [])

  useEffect(() => {
    if (project) {
      setMetadata(`${project.title} | ${portfolioConfig.name}`, project.summary)
      return
    }

    if (currentPath === '/') {
      setMetadata(portfolioConfig.seo.title, portfolioConfig.seo.description)
      return
    }

    setMetadata(`페이지를 찾을 수 없습니다 | ${portfolioConfig.name}`, portfolioConfig.seo.description)
  }, [currentPath, project])

  let page = <NotFoundPage />

  if (currentPath === '/') {
    page = <HomePage />
  } else if (project) {
    page = (
      <Suspense fallback={<main className="min-h-screen bg-canvas pt-[72px]" aria-label="프로젝트 불러오는 중" />}>
        <ProjectDetailPage project={project} />
      </Suspense>
    )
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header currentPath={currentPath} />
      {page}
      <Footer />
    </div>
  )
}

export default App
