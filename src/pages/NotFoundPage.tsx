import { ArrowLeft } from 'lucide-react'
import { InternalLink } from '../components/ui/InternalLink'

export function NotFoundPage() {
  return (
    <main className="min-h-[calc(100svh-64px)] bg-canvas px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-7xl border-t border-ink/20 pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-web">404 / Not Found</p>
        <h1 className="mt-12 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-[-0.05em] text-ink sm:text-7xl">페이지를 찾을 수 없습니다.</h1>
        <p className="mt-8 max-w-md text-base leading-8 text-muted">요청한 주소가 변경되었거나 존재하지 않습니다.</p>
        <InternalLink
          href="/#home"
          className="mt-8 inline-flex min-h-12 items-center gap-2 bg-ink px-5 text-sm font-semibold text-panel transition-colors duration-200 hover:bg-web focus:outline-none focus-visible:ring-2 focus-visible:ring-unity"
        >
          <ArrowLeft aria-hidden="true" size={16} /> 홈으로 돌아가기
        </InternalLink>
      </div>
    </main>
  )
}
