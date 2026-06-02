const codeLines = ['const data = await sensor.read()', 'dashboard.render(data)', 'device.move(reality)']

export function HeroGraphic() {
  return (
    <div
      className="relative min-h-[360px] overflow-hidden rounded-[8px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.14),transparent_26%),linear-gradient(135deg,rgba(248,250,252,0.9),rgba(255,255,255,0.74))]" />

      <div className="relative grid h-full grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="flex flex-col gap-4">
          <div className="rounded-[8px] border border-slate-200 bg-slate-950 p-4 text-left shadow-lg">
            <div className="mb-4 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              {codeLines.map((line) => (
                <p key={line}>
                  <span className="text-cyan-300">{'>'}</span> {line}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {['24.8C', '48%', 'ON'].map((metric, index) => (
              <div
                key={metric}
                className="rounded-[8px] border border-slate-200 bg-white/85 p-3 text-center shadow-sm"
              >
                <p className="text-xs text-slate-500">{['Temp', 'Humidity', 'Motor'][index]}</p>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-950">{metric}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[8px] border border-cyan-100 bg-cyan-50/70 p-4">
          <div className="absolute left-1/2 top-8 h-[72%] w-px -translate-x-1/2 bg-cyan-300" />
          <div className="absolute left-8 top-1/2 h-px w-[72%] -translate-y-1/2 bg-blue-300" />
          <div className="absolute left-8 top-8 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_0_8px_rgba(6,182,212,0.12)]" />
          <div className="absolute right-8 top-8 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
          <div className="absolute bottom-8 left-8 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
          <div className="absolute bottom-8 right-8 h-2.5 w-2.5 rounded-full bg-slate-700 shadow-[0_0_0_8px_rgba(15,23,42,0.08)]" />
          <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[8px] border border-cyan-300 bg-white shadow-lg">
            <div className="h-10 w-10 rounded-[6px] border border-slate-300 bg-slate-100 p-1">
              <div className="h-full w-full rounded-[4px] bg-gradient-to-br from-cyan-400 to-blue-500" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-16 rounded-[8px] border border-slate-200 bg-white/90 p-3 shadow-sm">
            <div className="flex h-full items-end gap-1.5">
              {[46, 72, 38, 82, 58, 66, 90].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-cyan-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
