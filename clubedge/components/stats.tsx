const stats = [
  { value: "2M+", label: "Databases managed" },
  { value: "150K+", label: "Developers building" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "24/7", label: "Global support" },
]

export function Stats() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold text-brand sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
