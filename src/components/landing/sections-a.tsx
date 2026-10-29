import { useState } from 'react'
import { Check, Plus } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  pillars,
  priorities,
  responsibilities,
  services,
} from '@/content/propuesta'
import { Eyebrow, Reveal, SectionTitle, img } from './primitives'

export function Proposal() {
  return (
    <section id="propuesta" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>La propuesta</Eyebrow>
          <SectionTitle className="mt-5">
            Un solo programa para{' '}
            <span className="font-serif text-[1.15em] font-normal italic text-aai-blue">
              toda la galería
            </span>
          </SectionTitle>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7">
          <Reveal delay={100}>
            <p>
              AAI propone asumir durante 12 meses la gestión integral de la
              galería de Casa Nuestra. El objetivo es posicionarla como un
              referente destacado del arte en Malinalco mediante una identidad
              curatorial propia, una relación activa con artistas y comunidad,
              una experiencia valiosa para huéspedes y un modelo económico que
              permita sostener su continuidad.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Una galería necesita una línea artística, investigación,
              programación, comunicación, acuerdos comerciales y seguimiento.
              AAI propone coordinar estas piezas como un solo programa, medir su
              avance desde el inicio y ajustar el trabajo con Casa Nuestra cada
              trimestre.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="border-l-4 border-aai-yellow bg-card p-6 shadow-sm">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-aai-blue">
                Mandato solicitado
              </p>
              <p className="mt-3 text-base text-ink">
                Designar a AAI como responsable de la gestión de la galería por
                un año, con alcance, presupuesto, honorarios, reglas de venta y
                objetivos acordados antes del inicio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-content px-4 sm:px-6">
        <Reveal>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
            Prioridades del primer año
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {priorities.map((p, i) => (
            <Reveal as="li" key={p.key} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-sm bg-card p-8 shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none">
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-25 transition-transform duration-700 group-hover:scale-x-100 motion-reduce:transition-none"
                  style={{ background: p.color }}
                />
                <span
                  className="font-display text-xs font-semibold tabular-nums"
                  style={{ color: p.color }}
                >
                  0{i + 1}
                </span>
                <h4 className="mt-6 font-display text-2xl font-semibold">
                  {p.key}
                </h4>
                <p className="mt-3 leading-relaxed text-ink/75">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Context() {
  return (
    <section
      id="contexto"
      className="scroll-mt-20 bg-aai-blue py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow index="01" className="text-aai-yellow">
              Contexto y oportunidad
            </Eyebrow>
            <SectionTitle className="mt-5">
              Casa Nuestra y el papel de la galería
            </SectionTitle>
            <p className="mt-8 max-w-reading text-lg leading-relaxed text-white/80">
              Casa Nuestra se presenta como un hotel boutique y espacio de
              experiencias para compartir: un lugar acogedor, respetuoso y
              consciente que une tradición, modernidad, arte y naturaleza, y
              recibe a huéspedes, amigos y vecinos. Su oferta incluye hospedaje,
              bienestar, coworking, cafetería y experiencias creativas.
            </p>
            <p className="mt-5 max-w-reading leading-relaxed text-white/65">
              La propuesta toma como guía los valores expresados por Casa
              Nuestra y plantea validarlos con el equipo durante el arranque del
              proyecto.
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <figure className="relative">
              <img
                src={img('taller-comunidad.png', 900)}
                srcSet={`${img('taller-comunidad.png', 600)} 600w, ${img('taller-comunidad.png', 1000)} 1000w`}
                sizes="(min-width: 1024px) 38vw, 92vw"
                alt="Artistas y vecinos comparten un taller de cerámica y pigmentos en un patio con jardín"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
              <figcaption className="absolute -bottom-5 right-4 max-w-[16rem] bg-aai-yellow p-4 font-serif text-lg italic leading-snug text-aai-blue shadow-lg">
                “El reconocimiento en una comunidad se construye con
                continuidad.”
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              De sala de exhibición a referente cultural
            </h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
              La selección artística necesita un relato que ayude al público a
              entender la obra; las actividades necesitan conexión con el lugar;
              la comunicación necesita un calendario; y las ventas necesitan
              acuerdos transparentes.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 100}
                className="group bg-aai-blue p-7 transition-colors duration-500 hover:bg-white/10 motion-reduce:transition-none"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-aai-green/60 font-display text-sm text-aai-green transition-colors group-hover:bg-aai-green group-hover:text-aai-blue">
                  {i + 1}
                </span>
                <h4 className="mt-6 font-display text-lg font-semibold">
                  {p.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-20 grid gap-8 border-t border-white/15 pt-12 lg:grid-cols-12">
          <h3 className="font-display text-2xl font-semibold lg:col-span-4">
            Valor para el conjunto
          </h3>
          <p className="leading-relaxed text-white/75 lg:col-span-7 lg:col-start-6">
            Una galería bien gestionada puede diferenciar la experiencia de Casa
            Nuestra y ofrecer otra forma de vivir Malinalco. También puede
            generar oportunidades profesionales e ingresos para artistas, abrir
            actividades culturales a la comunidad y crear fuentes de ingreso por
            venta de obra, programación y alianzas. Los efectos en la percepción
            del hotel y las referencias a hospedaje se medirán por separado; no
            se presuponen.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Model() {
  const [active, setActive] = useState(0)

  return (
    <section id="modelo" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="02">El modelo AAI</Eyebrow>
            <SectionTitle className="mt-5">
              Qué es Acelerador Artístico{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Inteligente</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-3 bg-aai-yellow"
                />
              </span>
            </SectionTitle>
            <p className="mt-8 text-lg leading-relaxed text-ink/80">
              Una consultoría que combina investigación artística con estrategia
              de posicionamiento y comercialización. Analiza la obra como objeto
              cultural y como propuesta para un público: su origen, proceso,
              materiales, concepto y contexto.
            </p>
            <p className="mt-5 leading-relaxed text-ink/70">
              La investigación alimenta la curaduría y la museografía, y orienta
              la marca, la difusión digital, el catálogo y los canales
              comerciales. Cada exposición funciona como experiencia cultural y
              como oportunidad para el público y las ventas de los artistas.
            </p>
            <div className="mt-10 hidden overflow-hidden rounded-sm lg:block">
              <img
                src={img('obra-detalle.png', 700)}
                alt="Detalle de una pintura con pinceladas gruesas en azul, verde y amarillo junto a su cédula"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105 motion-reduce:transition-none"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
                Servicios que AAI coordinará
              </h3>
            </Reveal>
            <ul className="mt-6 border-t border-ink/15">
              {services.map((s, i) => {
                const open = active === i
                return (
                  <Reveal
                    as="li"
                    key={s.title}
                    delay={i * 80}
                    className="border-b border-ink/15"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(open ? -1 : i)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-5 py-6 text-left"
                    >
                      <span
                        className={cn(
                          'font-display text-sm tabular-nums transition-colors',
                          open ? 'text-aai-blue' : 'text-ink/40',
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          'flex-1 font-display text-lg font-semibold transition-colors sm:text-xl',
                          open ? 'text-aai-blue' : 'group-hover:text-aai-blue',
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none',
                          open
                            ? 'rotate-45 border-aai-blue bg-aai-blue text-white'
                            : 'border-ink/25',
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-500 motion-reduce:transition-none',
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 pl-10 leading-relaxed text-ink/75">
                          {s.text}
                        </p>
                        <div className="flex flex-wrap gap-2 pb-6 pl-10">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-aai-yellow/70 px-3 py-1 text-xs font-semibold text-aai-blue"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal className="mt-14">
              <h3 className="font-display text-xl font-semibold">
                Alcance de la gestión anual
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm bg-aai-blue p-6 text-white">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-aai-yellow">
                    AAI coordina
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {responsibilities.aai.map((r) => (
                      <li key={r} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-aai-green" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-sm bg-aai-sky/10 p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-aai-blue">
                    Casa Nuestra define
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {responsibilities.casa.map((r) => (
                      <li key={r} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-aai-blue" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink/60">
                La matriz final de responsabilidades quedará por escrito.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
