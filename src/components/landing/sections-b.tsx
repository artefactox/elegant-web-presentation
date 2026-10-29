import { useState } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  agreements,
  costs,
  indicators,
  revenueSources,
  rhythm,
  sources,
  stages,
} from '@/content/propuesta'
import { AAIMark, Brand, Eyebrow, Reveal, SectionTitle } from './primitives'

const stageColors = [
  'var(--aai-yellow)',
  'var(--aai-sky)',
  'var(--aai-green)',
  '#ffffff',
]

export function Roadmap() {
  const [active, setActive] = useState(0)
  const stage = stages[active]

  return (
    <section
      id="ruta"
      className="relative scroll-mt-20 overflow-hidden bg-aai-blue py-24 text-white sm:py-32"
    >
      <AAIMark className="pointer-events-none absolute -right-24 -bottom-16 h-[22rem] w-auto opacity-[0.07] [&_*]:fill-white" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow index="03" className="text-aai-yellow">
              Ruta de trabajo
            </Eyebrow>
            <SectionTitle className="mt-5">
              Plan de gestión de 12 meses
            </SectionTitle>
          </div>
          <p className="self-end leading-relaxed text-white/75 lg:col-span-4 lg:col-start-9">
            El primer año se organiza en cuatro etapas. El calendario detallado,
            las metas y los recursos se definirán después del diagnóstico y de
            acordar una línea base.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-16">
          {/* Línea de 12 meses */}
          <div className="grid grid-cols-12 gap-1" aria-hidden>
            {Array.from({ length: 12 }, (_, m) => {
              const s = Math.floor(m / 3)
              return (
                <button
                  key={m}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setActive(s)}
                  className="group flex flex-col gap-2"
                >
                  <span
                    className={cn(
                      'h-2 w-full rounded-full transition-all duration-500 motion-reduce:transition-none',
                      s <= active ? 'opacity-100' : 'opacity-25',
                    )}
                    style={{ background: stageColors[s] }}
                  />
                  <span className="hidden font-display text-[0.65rem] text-white/50 sm:block">
                    M{m + 1}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            role="tablist"
            aria-label="Etapas"
            className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4"
          >
            {stages.map((s, i) => (
              <button
                key={s.focus}
                role="tab"
                type="button"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="stage-panel"
                onClick={() => setActive(i)}
                className={cn(
                  'rounded-sm border p-5 text-left transition-all duration-300 motion-reduce:transition-none',
                  active === i
                    ? 'border-transparent bg-white text-aai-blue shadow-xl'
                    : 'border-white/20 hover:border-white/60',
                )}
              >
                <span
                  className="block font-display text-xs uppercase tracking-[0.18em]"
                  style={{
                    color: active === i ? 'var(--aai-blue)' : stageColors[i],
                  }}
                >
                  {s.period}
                </span>
                <span className="mt-2 block font-display text-lg font-semibold sm:text-xl">
                  {s.focus}
                </span>
              </button>
            ))}
          </div>

          <div
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="mt-6 grid gap-8 rounded-sm bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-10 lg:grid-cols-12"
          >
            <div
              key={`h-${active}`}
              className="animate-letter-in lg:col-span-4"
            >
              <p
                className="font-display text-6xl font-bold"
                style={{ color: stageColors[active] }}
              >
                0{active + 1}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold">
                {stage.focus}
              </p>
              <p className="mt-1 text-white/60">{stage.period}</p>
            </div>
            <ul
              key={`l-${active}`}
              className="grid gap-3 sm:grid-cols-2 lg:col-span-8"
            >
              {stage.deliverables.map((d, i) => (
                <li
                  key={d}
                  className="animate-letter-in flex items-start gap-3 rounded-sm bg-white/[0.06] p-4"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <span
                    className="mt-1.5 size-2 shrink-0 rotate-45"
                    style={{ background: stageColors[active] }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Ritmo de seguimiento
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {rhythm.map((r, i) => (
              <Reveal
                as="li"
                key={r.cadence}
                delay={i * 120}
                className="border-t-2 border-aai-yellow pt-5"
              >
                <p className="font-display text-2xl font-semibold">
                  {r.cadence}
                </p>
                <p className="mt-2 leading-relaxed text-white/75">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Sustainability() {
  return (
    <section id="sostenibilidad" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow index="04">Sostenibilidad</Eyebrow>
          <SectionTitle className="mt-5">
            Un modelo económico{' '}
            <span className="font-serif text-[1.15em] font-normal italic text-aai-blue">
              transparente
            </span>
          </SectionTitle>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            La galería debe conocer qué ingresos puede producir, cuáles son sus
            costos y qué valor aporta a Casa Nuestra y a los artistas. AAI
            desarrollará el modelo con datos reales: no se fijan proyecciones ni
            comisiones por adelantado, porque deben acordarse con el hotel y con
            cada artista.
          </p>
        </Reveal>

        <h3 className="sr-only">Fuentes de ingreso por evaluar</h3>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {revenueSources.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-sm bg-card p-7 ring-1 ring-border"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-aai-yellow transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none"
              />
              <div className="relative">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-aai-blue">
                  Fuente de ingreso
                </p>
                <h4 className="mt-4 font-display text-xl font-semibold group-hover:text-aai-blue">
                  {r.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold">
              Costos que refleja el presupuesto
            </h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              Cada exposición tendrá un balance simple de ingresos y costos,
              además de una revisión acumulada del año.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {costs.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors hover:border-aai-blue hover:bg-aai-blue hover:text-white"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={150}
            className="rounded-sm bg-aai-blue p-8 text-white sm:p-10"
          >
            <h3 className="font-display text-2xl font-semibold">
              Acuerdos de operación
            </h3>
            <p className="mt-3 leading-relaxed text-white/75">
              Antes del lanzamiento, Casa Nuestra y AAI acordarán estos puntos.
              Protegen la experiencia del hotel y dan certeza a artistas y
              visitantes.
            </p>
            <ol className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {agreements.map((a, i) => (
                <li key={a} className="flex items-baseline gap-3 text-sm">
                  <span className="font-display text-xs text-aai-green tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {a}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function SuccessCase() {
  return (
    <section className="scroll-mt-20 bg-aai-sky/10 py-24 sm:py-32" id="caso">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow index="05">Caso de éxito</Eyebrow>
            <SectionTitle className="mt-5">
              Cómo documentar el caso de éxito
            </SectionTitle>
          </Reveal>
          <Reveal delay={100} className="self-end lg:col-span-5 lg:col-start-8">
            <p className="leading-relaxed text-ink/75">
              El caso distinguirá actividad, resultados observados y
              contribución del proyecto. Durante el primer mes se levantará una
              línea base; después se revisarán los datos mensualmente y se
              compararán periodos equivalentes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {indicators.map((d, i) => (
            <Reveal
              as="article"
              key={d.dimension}
              delay={i * 100}
              className="grid gap-6 rounded-sm bg-card p-7 shadow-sm sm:grid-cols-[auto_1fr]"
            >
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-full font-display font-bold text-white"
                style={{
                  background: [
                    'var(--aai-blue)',
                    'var(--aai-sky)',
                    'var(--aai-green)',
                    'var(--aai-blue)',
                  ][i],
                }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {d.dimension}
                </h3>
                <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-ink/50">
                      Indicadores
                    </dt>
                    <dd className="mt-1 leading-relaxed">{d.indicators}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-ink/50">
                      Registro
                    </dt>
                    <dd className="mt-1 leading-relaxed text-ink/75">
                      {d.record}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/65">
            Las metas numéricas se fijarán con Casa Nuestra después de revisar
            la línea base. Las fotografías, citas y testimonios se recopilarán
            con autorización y se publicarán solo con consentimiento.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Decision() {
  return (
    <section
      id="decision"
      className="relative scroll-mt-20 overflow-hidden bg-aai-yellow py-24 text-aai-blue sm:py-32"
    >
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 mix-blend-multiply"
      />
      <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Eyebrow className="text-aai-blue">Decisión solicitada</Eyebrow>
          <p className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
            Autorizar a AAI para gestionar integralmente la galería por{' '}
            <span className="font-serif font-normal italic">12 meses</span>.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
            Y acordar el alcance, el presupuesto, los honorarios, las reglas
            comerciales, las responsabilidades de aprobación y las metas del
            primer trimestre. Con ese mandato, AAI iniciará el diagnóstico,
            definirá la línea base y presentará el plan detallado de los
            primeros 90 días.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/propuesta-galeria-casa-nuestra.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-aai-blue px-7 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <Download className="size-5" />
              Descargar la propuesta
            </a>
            <a
              href="#ruta"
              className="rounded-full border-2 border-aai-blue px-7 py-[14px] font-semibold transition-colors hover:bg-aai-blue hover:text-white"
            >
              Revisar la ruta
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5">
          <ol className="space-y-3">
            {['Diagnóstico', 'Línea base', 'Plan de 90 días'].map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-5 rounded-sm bg-white/70 p-5 backdrop-blur transition-transform duration-500 hover:translate-x-2 motion-reduce:transition-none"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-aai-blue font-display font-bold text-aai-yellow">
                  {i + 1}
                </span>
                <span className="font-display text-lg font-semibold">{s}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-aai-blue py-16 text-white/75">
      <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Brand inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Acelerador Artístico Inteligente · Propuesta de gestión anual de la
            galería.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Fuentes de trabajo
          </p>
          <p className="mt-3 text-sm">
            Documento «Acelerador Artístico Inteligente» y sitio oficial de Casa
            Nuestra:
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-white transition-colors hover:text-aai-yellow"
                >
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-content flex-wrap justify-between gap-4 border-t border-white/10 px-4 pt-6 font-display text-[0.65rem] uppercase tracking-[0.2em] sm:px-6">
        <span>AAI · Acelerador Artístico Inteligente</span>
        <span>2026</span>
      </div>
    </footer>
  )
}
