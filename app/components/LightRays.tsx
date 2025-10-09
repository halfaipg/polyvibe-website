'use client'

export default function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        {/* Light rays */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-[2px] h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(130, 71, 229, 0.3), transparent)',
              transform: `translateX(-50%) rotate(${(i - 3) * 8}deg)`,
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>
    </div>
  )
}

