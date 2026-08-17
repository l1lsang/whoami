import { Bot, Building2, CircleDollarSign, Gamepad2, MapPin, Shield, Swords } from 'lucide-react'
import type { Project } from '../../data/projects'

type ProjectVisualProps = {
  project: Project
  className?: string
}

export function ProjectVisual({ project, className = '' }: ProjectVisualProps) {
  if (project.image) {
    return (
      <div className={`overflow-hidden border border-ink/20 bg-surface ${className}`}>
        <img
          src={project.image}
          alt={`${project.title} 프로젝트 화면`}
          className="h-full w-full object-cover saturate-[0.82] transition duration-200 group-hover:saturate-100"
          loading="lazy"
        />
      </div>
    )
  }

  if (project.slug === 'dream-defenders') {
    return (
      <div className={`relative overflow-hidden border border-ink/20 bg-[#20231f] ${className}`} role="img" aria-label="드림 디펜더스 Unity 게임 화면 플레이스홀더">
        <div className="visual-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 flex h-10 items-center justify-between border-b border-white/20 bg-black/20 px-4 font-mono text-[9px] text-white/60">
          <span className="flex items-center gap-2"><Gamepad2 size={12} className="text-unity" /> GAME VIEW</span>
          <span>STAGE 03</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[38%] border-t border-white/20 bg-[#30352f]" />
        <div className="absolute bottom-[16%] left-[12%] grid size-16 place-items-center border border-unity bg-unity/20 text-unity">
          <Shield size={28} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[20%] left-[36%] flex items-center gap-2">
          <Swords className="text-white/60" size={16} />
          <span className="h-px w-12 bg-unity" />
        </div>
        <div className="absolute bottom-[16%] right-[12%] flex gap-2">
          {[1, 2, 3].map((enemy) => (
            <span key={enemy} className="block h-10 w-6 border border-unity/70 bg-unity/20" />
          ))}
        </div>
        <div className="absolute left-4 top-14 h-2 w-28 bg-white/20">
          <span className="block h-full w-[72%] bg-web" />
        </div>
        <span className="absolute right-4 top-14 font-mono text-[9px] text-white/60">WAVE 4 / 6</span>
      </div>
    )
  }

  if (project.slug === 'spotit') {
    return (
      <div className={`relative overflow-hidden border border-ink/20 bg-surface ${className}`} role="img" aria-label="스팟잇 지도와 위치 핀 화면 플레이스홀더">
        <div className="map-grid absolute inset-0" />
        <span className="absolute -left-[8%] top-[24%] h-1 w-[84%] rotate-[16deg] bg-web/20" />
        <span className="absolute left-[28%] top-0 h-[116%] w-1 -rotate-[28deg] bg-ink/10" />
        <MapPin className="absolute left-[52%] top-[28%] text-web" size={40} fill="rgba(31,81,63,.12)" strokeWidth={1.5} />
        <MapPin className="absolute left-[20%] top-[60%] text-unity" size={24} fill="rgba(212,82,52,.12)" strokeWidth={1.5} />
        <span className="absolute right-[16%] top-[68%] size-3 border border-web bg-panel" />
        <div className="absolute bottom-4 right-4 w-[44%] border border-ink/20 bg-panel p-3">
          <div className="h-14 bg-web/10" />
          <span className="mt-3 block h-2 w-3/4 bg-ink/30" />
          <span className="mt-2 block h-1 w-1/2 bg-ink/15" />
        </div>
        <div className="absolute left-4 top-4 flex items-center gap-2 border border-ink/20 bg-panel px-3 py-2 font-mono text-[9px] text-muted">
          <span className="size-2 bg-unity" /> TODAY'S SPOT
        </div>
      </div>
    )
  }

  if (project.slug === 'hansung-space-reservation') {
    return (
      <div className={`relative overflow-hidden border border-ink/20 bg-panel p-4 ${className}`} role="img" aria-label="한성대학교 공간 배치도 화면 플레이스홀더">
        <div className="flex h-10 items-center justify-between border border-b-0 border-ink/20 bg-surface px-3 font-mono text-[9px] text-muted">
          <span className="flex items-center gap-2 text-ink"><Building2 size={12} className="text-web" /> SANGSANG BASE</span>
          <span>14:00 — 15:00</span>
        </div>
        <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.8fr_1.2fr] gap-2 border border-ink/20 p-3">
          <div className="grid grid-rows-2 gap-2">
            <div className="border border-web bg-web/10 p-2 font-mono text-[8px] text-web">A-01 · OPEN</div>
            <div className="border border-ink/20 bg-surface p-2 font-mono text-[8px] text-muted">A-02</div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            {['B-01', 'B-02', 'B-03', 'B-04', 'B-05', 'B-06'].map((room, index) => (
              <div key={room} className={`grid place-items-center border font-mono text-[8px] ${index === 2 || index === 5 ? 'border-web bg-web/10 text-web' : 'border-ink/20 bg-panel text-muted'}`}>
                {room}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden border border-ink/20 bg-[#20231f] p-4 ${className}`} role="img" aria-label="디스코드 경제 게임봇 채팅 화면 플레이스홀더">
      <div className="absolute inset-y-0 left-0 w-12 border-r border-white/20 bg-black/20 p-2">
        <div className="grid size-8 place-items-center bg-unity/20 text-unity"><Bot size={16} /></div>
        <span className="mt-3 block size-8 border border-white/10 bg-white/10" />
        <span className="mt-2 block size-8 border border-white/10 bg-white/10" />
      </div>
      <div className="ml-12 flex h-full flex-col border border-white/20 bg-[#292d28]">
        <div className="flex h-10 items-center justify-between border-b border-white/20 px-3 font-mono text-[9px] text-white/60">
          <span># 경제-게임</span>
          <span className="flex items-center gap-2 text-unity"><CircleDollarSign size={12} /> 24,850 DC</span>
        </div>
        <div className="space-y-4 p-4">
          <div className="flex gap-3">
            <span className="size-8 flex-none bg-web/40" />
            <div className="flex-1">
              <span className="block h-2 w-16 bg-white/30" />
              <span className="mt-2 block h-1 w-[84%] bg-white/10" />
            </div>
          </div>
          <div className="ml-10 border-l-2 border-unity bg-unity/10 p-3">
            <span className="block h-2 w-20 bg-unity/60" />
            <div className="mt-3 flex items-end gap-1">
              {[32, 48, 40, 72, 56, 88].map((height) => (
                <span key={height} className="w-3 bg-web/70" style={{ height: `${height / 2}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
