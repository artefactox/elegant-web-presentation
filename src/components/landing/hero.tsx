import { useEffect, useState } from 'react'
import { ArrowDownRight, Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { heroStats, navLinks } from '@/content/propuesta'
import { Brand, CountUp, img } from './primitives'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 motion-reduce:transition-none',
        scrolled
          ? 'bg-white/85 py-3 shadow-[0_1px_0_var(--border)] backdrop-blur-md'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Inicio">
          <Brand />
        </a>
        <nav
          aria-label="Secciones"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-aai-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#decision"
            className="rounded-full bg-aai-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
          >
            Decisión
          </a>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="rounded-full p-2 text-aai-blue lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-aai-yellow border-0">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <SheetDescription className="sr-only">
              Secciones de la propuesta
            </SheetDescription>
            <nav
              className="mt-16 flex flex-col gap-2 px-6"
              aria-label="Menú móvil"
            >
              {[...navLinks, { href: '#decision', label: 'Decisión' }].map(
                (l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-semibold text-aai-blue"
                  >
                    {l.label}
                  </a>
                ),
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const titleWords = [
  'De',
  'sala',
  'de',
  'exhibición',
  'a',
  'referente',
  'cultural',
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-aai-yellow pt-32 pb-16 text-aai-blue sm:pt-40"
    >
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 mix-blend-multiply"
      />
      <div className="relative mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="animate-letter-in font-display text-xs font-medium uppercase tracking-[0.24em]">
            Propuesta de gestión anual · Malinalco, México
          </p>
          <h1 className="mt-6 font-display text-[2.25rem] font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {titleWords.map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden pb-1 align-bottom"
              >
                <span
                  className="animate-letter-in inline-block"
                  style={{ animationDelay: `${150 + i * 70}ms` }}
                >
                  {w === 'referente' ? (
                    <em className="font-serif text-[1.15em] font-normal italic">
                      {w}
                    </em>
                  ) : (
                    w
                  )}
                  &nbsp;
                </span>
              </span>
            ))}
          </h1>
          <p
            className="animate-letter-in mt-8 max-w-xl text-lg leading-relaxed text-ink/80"
            style={{ animationDelay: '700ms' }}
          >
            Acelerador Artístico Inteligente propone asumir durante 12 meses la
            gestión integral de la galería de{' '}
            <strong className="font-semibold text-aai-blue">
              Casa Nuestra
            </strong>
            : una identidad curatorial propia, una relación activa con artistas
            y comunidad, y un modelo económico que sostenga su continuidad.
          </p>
          <div
            className="animate-letter-in mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '850ms' }}
          >
            <a
              href="#propuesta"
              className="group inline-flex items-center gap-2 rounded-full bg-aai-blue px-7 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Conocer la propuesta
              <ArrowDownRight className="size-5 transition-transform group-hover:rotate-[-45deg] motion-reduce:transition-none" />
            </a>
            <a
              href="/propuesta-galeria-casa-nuestra.pdf"
              className="rounded-full border-2 border-aai-blue px-7 py-[14px] font-semibold transition-colors hover:bg-aai-blue hover:text-white"
            >
              Descargar PDF
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-t-full border-[6px] border-aai-blue/90 shadow-2xl shadow-aai-blue/25 lg:max-w-none">
            <img
              src={img('galeria-hero.jpg', 900)}
              srcSet={`${img('galeria-hero.jpg', 600)} 600w, ${img('galeria-hero.jpg', 900)} 900w, ${img('galeria-hero.jpg', 1300)} 1300w`}
              sizes="(min-width: 1024px) 40vw, 90vw"
              alt="Interior con mesas, sillas y objetos cubiertos por pinceladas en azul, verde y amarillo, como dentro de una pintura"
              className="h-full w-full object-cover object-[30%_center]"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-content grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
        {heroStats.map((s, i) => (
          <div
            key={s.label}
            className="animate-letter-in border-t-2 border-aai-blue pt-4 pr-4"
            style={{ animationDelay: `${1000 + i * 120}ms` }}
          >
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-5xl font-bold sm:text-6xl">
              <CountUp to={Number(s.value)} />
            </dd>
            <dd className="mt-1 text-sm font-medium text-ink/75">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
