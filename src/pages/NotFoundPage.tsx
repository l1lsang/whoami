import { ArrowLeft } from 'lucide-react'
import { InternalLink } from '../components/ui/InternalLink'

export function NotFoundPage() {
  return (
    <main className="grid min-h-[calc(100svh-72px)] place-items-center bg-canvas px-5 pt-[72px] text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-web">404 / Not Found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">페이지를 찾을 수 없습니다.</h1>
        <p className="mt-5 text-muted">요청한 주소가 변경되었거나 존재하지 않습니다.</p>
        <InternalLink
          href="/#home"
          className="mt-8 inline-flex min-h-12 items-center gap-2 bg-ink px-5 text-sm font-semibold text-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-web"
        >
          <ArrowLeft aria-hidden="true" size={16} /> 홈으로 돌아가기
        </InternalLink>
      </div>
    </main>
  )
}
