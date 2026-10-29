import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Ruta de una imagen de /public/img servida por Netlify Image CDN. */
export function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=80`
}

/** Monograma AAI redibujado en vectores a partir del logo original. */
export function AAIMark({
  className,
  animated = false,
}: {
  className?: string
  animated?: boolean
}) {
  const anim = (delay: number): CSSProperties | undefined =>
    animated ? { animationDelay: `${delay}ms` } : undefined
  return (
    <svg
      viewBox="0 0 380 190"
      className={className}
      role="img"
      aria-label="AAI"
    >
      <path
        className={animated ? 'animate-bar-rise' : undefined}
        style={anim(100)}
        fill="var(--aai-blue)"
        fillRule="evenodd"
        d="M2 189 44 1h27l41 188H90l-9-55H33l-9 55H2Zm36-73h40L58 50 38 116Z"
      />
      <path
        className={animated ? 'animate-bar-rise' : undefined}
        style={anim(260)}
        fill="var(--aai-sky)"
        fillRule="evenodd"
        d="M118 189 200 1h56l84 188h-58l-12-35h-84l-12 35h-56Zm80-68h62l-31-71-31 71Z"
      />
      <rect
        className={animated ? 'animate-bar-rise' : undefined}
        style={anim(420)}
        x="356"
        y="1"
        width="22"
        height="188"
        fill="var(--aai-green)"
      />
    </svg>
  )
}

/** Marca de navegación: monograma + nombre. */
export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <AAIMark className="h-6 w-auto" />
      <span
        className={cn(
          'font-display text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.18em]',
          inverted ? 'text-white' : 'text-aai-blue',
        )}
      >
        Acelerador Artístico
        <br />
        Inteligente
      </span>
    </span>
  )
}

/** Aparición suave al entrar en pantalla. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.22em] text-aai-blue',
        className,
      )}
    >
      {index && <span className="tabular-nums">{index}</span>}
      {index && <span aria-hidden className="h-px w-8 bg-current" />}
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

/** Cifra que cuenta hacia arriba cuando aparece. */
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return
    setN(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
    </span>
  )
}
