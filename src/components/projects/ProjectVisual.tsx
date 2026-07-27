import { Bot, Building2, CircleDollarSign, Gamepad2, MapPin, Shield, Swords } from 'lucide-react'
import type { Project } from '../../data/projects'

type ProjectVisualProps = {
  project: Project
  className?: string
}

export function ProjectVisual({ project, className = '' }: ProjectVisualProps) {
  if (project.image) {
    return (
      <div className={`overflow-hidden bg-panel ${className}`}>
        <img
          src={project.image}
          alt={`${project.title} 프로젝트 화면`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          loading="lazy"
        />
      </div>
    )
  }

  if (project.slug === 'dream-defenders') {
    return (
      <div className={`relative overflow-hidden bg-[#121321] ${className}`} role="img" aria-label="드림 디펜더스 Unity 게임 화면 플레이스홀더">
        <div className="visual-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-x-0 top-0 flex h-9 items-center justify-between border-b border-unity/15 bg-black/20 px-3 font-mono text-[9px] text-muted">
          <span className="flex items-center gap-1.5"><Gamepad2 size={11} className="text-unity" /> GAME VIEW</span>
          <span>STAGE 03</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[38%] border-t border-unity/20 bg-[#1d2033]" />
        <div className="absolute bottom-[16%] left-[11%] grid size-14 place-items-center border border-unity/50 bg-unity/10 text-unity sm:size-16">
          <Shield size={27} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[20%] left-[34%] flex items-center gap-2">
          <Swords className="text-muted" size={17} />
          <span className="h-px w-12 bg-gradient-to-r from-unity to-transparent" />
        </div>
        <div className="absolute bottom-[17%] right-[10%] flex gap-2">
          {[1, 2, 3].map((enemy) => (
            <span key={enemy} className="block h-10 w-7 border border-[#f07178]/45 bg-[#f07178]/10" />
          ))}
        </div>
        <div className="absolute left-4 top-12 h-1.5 w-28 bg-white/8">
          <span className="block h-full w-[72%] bg-unity/70" />
        </div>
        <span className="absolute right-4 top-12 font-mono text-[9px] text-muted">WAVE 4 / 6</span>
      </div>
    )
  }

  if (project.slug === 'spotit') {
    return (
      <div className={`relative overflow-hidden bg-[#101a19] ${className}`} role="img" aria-label="스팟잇 지도와 위치 핀 화면 플레이스홀더">
        <div className="map-grid absolute inset-0 opacity-55" />
        <span className="absolute -left-[8%] top-[22%] h-1 w-[82%] rotate-[16deg] bg-web/12" />
        <span className="absolute left-[28%] top-0 h-[115%] w-1 -rotate-[28deg] bg-white/[0.04]" />
        <MapPin className="absolute left-[52%] top-[27%] text-web drop-shadow-[0_6px_15px_rgba(69,214,168,.28)]" size={42} fill="rgba(69,214,168,.16)" strokeWidth={1.5} />
        <MapPin className="absolute left-[18%] top-[58%] text-unity" size={24} fill="rgba(139,124,255,.12)" strokeWidth={1.5} />
        <span className="absolute right-[16%] top-[67%] size-3 rounded-full border border-web/60 bg-web/15" />
        <div className="absolute bottom-4 right-4 w-[44%] border border-white/10 bg-[#111719]/90 p-3 shadow-xl">
          <div className="h-14 bg-gradient-to-br from-web/15 to-unity/15" />
          <span className="mt-2 block h-1.5 w-3/4 bg-white/18" />
          <span className="mt-1.5 block h-1 w-1/2 bg-white/8" />
        </div>
        <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/10 bg-black/25 px-3 py-2 font-mono text-[9px] text-muted">
          <span className="size-1.5 rounded-full bg-web" /> TODAY'S SPOT
        </div>
      </div>
    )
  }

  if (project.slug === 'hansung-space-reservation') {
    return (
      <div className={`relative overflow-hidden bg-[#11171a] p-4 ${className}`} role="img" aria-label="한성대학교 공간 배치도 화면 플레이스홀더">
        <div className="flex h-8 items-center justify-between border border-b-0 border-white/10 bg-white/[0.025] px-3 font-mono text-[9px] text-muted">
          <span className="flex items-center gap-1.5"><Building2 size={11} className="text-web" /> SANGSANG BASE</span>
          <span>14:00 — 15:00</span>
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.8fr_1.2fr] gap-2 border border-white/10 p-3">
          <div className="grid grid-rows-2 gap-2">
            <div className="border border-web/30 bg-web/[0.07] p-2 font-mono text-[8px] text-web">A-01 · OPEN</div>
            <div className="border border-white/10 bg-white/[0.02] p-2 font-mono text-[8px] text-muted">A-02</div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            {['B-01', 'B-02', 'B-03', 'B-04', 'B-05', 'B-06'].map((room, index) => (
              <div key={room} className={`grid place-items-center border font-mono text-[8px] ${index === 2 || index === 5 ? 'border-web/35 bg-web/[0.08] text-web' : 'border-white/10 text-muted'}`}>
                {room}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-[#14151c] p-4 ${className}`} role="img" aria-label="디스코드 경제 게임봇 채팅 화면 플레이스홀더">
      <div className="absolute inset-y-0 left-0 w-11 border-r border-white/8 bg-[#0e1015] p-2">
        <div className="grid size-7 place-items-center rounded-full bg-unity/20 text-unity"><Bot size={14} /></div>
        <span className="mt-3 block size-7 rounded-full bg-white/[0.05]" />
        <span className="mt-2 block size-7 rounded-full bg-white/[0.05]" />
      </div>
      <div className="ml-11 flex h-full flex-col border border-white/8 bg-[#171922]">
        <div className="flex h-9 items-center justify-between border-b border-white/8 px-3 font-mono text-[9px] text-muted">
          <span># 경제-게임</span>
          <span className="flex items-center gap-1 text-[#d6b26e]"><CircleDollarSign size={11} /> 24,850 DC</span>
        </div>
        <div className="space-y-3 p-3">
          <div className="flex gap-2">
            <span className="size-7 flex-none rounded-full bg-unity/20" />
            <div className="flex-1">
              <span className="block h-1.5 w-16 bg-white/15" />
              <span className="mt-2 block h-1 w-[85%] bg-white/7" />
            </div>
          </div>
          <div className="ml-9 border-l-2 border-[#d6b26e]/50 bg-[#d6b26e]/[0.05] p-2">
            <span className="block h-1.5 w-20 bg-[#d6b26e]/45" />
            <div className="mt-2 flex items-end gap-1">
              {[35, 52, 42, 76, 60, 88].map((height) => (
                <span key={height} className="w-3 bg-web/40" style={{ height: `${height / 3}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
