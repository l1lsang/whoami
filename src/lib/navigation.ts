export const NAVIGATION_EVENT = 'portfolio:navigate'

export function navigateTo(href: string) {
  const url = new URL(href, window.location.origin)

  window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
  window.dispatchEvent(new Event(NAVIGATION_EVENT))

  window.requestAnimationFrame(() => {
    if (url.hash) {
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      target?.scrollIntoView({ behavior, block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  })
}
