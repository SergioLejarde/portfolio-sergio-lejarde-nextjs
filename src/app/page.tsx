'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  contact,
  education,
  experience,
  leadership,
  metrics,
  projects,
  skillGroups,
  strengths,
} from '@/data/profile'

const navItems = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <div className="min-h-screen text-stone-100">
      <SiteHeader />
      <HeroSection />

      <main>
        <MetricsSection />
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="font-mono text-sm uppercase tracking-[0.24em] text-stone-200">
          SL
        </a>

        <div className="hidden items-center gap-7 text-sm text-stone-400 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-amber-200">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="rounded-md border border-amber-200/30 px-4 py-2 text-sm text-amber-100 transition hover:border-amber-100 hover:bg-amber-100 hover:text-black"
        >
          Hablemos
        </a>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-28">
      <Image
        src="/portfolio-signal-map.png"
        alt="Mapa visual del perfil técnico de Sergio Lejarde"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_34%,rgba(5,5,5,0.62)_68%,rgba(5,5,5,0.9)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(208,166,78,0.18),transparent_28%),radial-gradient(circle_at_85%_72%,rgba(72,164,149,0.16),transparent_30%)]" />

      <div className="mx-auto grid min-h-[78svh] max-w-7xl content-center px-5 pb-20 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-amber-200">
            {contact.location} / remoto
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-stone-50 sm:text-6xl md:text-7xl">
            {contact.displayName}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-300 md:text-2xl md:leading-9">
            Desarrollador full-stack e ingeniero de sistemas enfocado en productos web,
            automatización, cloud y flujos de IA que necesitan criterio humano antes de llegar a producción.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="rounded-md bg-stone-100 px-5 py-3 text-center text-sm font-medium text-black transition hover:bg-amber-200"
            >
              Ver proyectos
            </a>
            <a
              href={contact.cv}
              download
              className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-medium text-stone-100 transition hover:border-teal-200 hover:text-teal-100"
            >
              Descargar CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-stone-400">
            <a className="hover:text-amber-200" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="hover:text-amber-200" href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-amber-200" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MetricsSection() {
  return (
    <section aria-label="Indicadores principales" className="border-y border-white/10 bg-stone-950/80">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-px md:grid-cols-4 md:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="min-h-32 bg-black/40 px-4 py-6">
            <p className="font-mono text-3xl text-amber-200">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-stone-400">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProfileSection() {
  return (
    <Section id="perfil" eyebrow="Perfil" title="Construyo sistemas útiles, verificables y fáciles de operar.">
      <div className="grid gap-5 md:grid-cols-3">
        {strengths.map((item) => (
          <article key={item.title} className="rounded-lg border border-white/10 bg-stone-950/70 p-6">
            <h3 className="text-lg font-medium text-stone-100">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-400">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-200">Enfoque</p>
          <h3 className="mt-4 text-2xl font-semibold text-stone-100">Perfil mixto entre producto, ingeniería e IA aplicada.</h3>
        </div>
        <p className="text-base leading-8 text-stone-300">
          Mi trabajo combina desarrollo web, arquitectura de software, automatización, análisis de datos y evaluación de
          modelos de IA. Me interesa especialmente crear herramientas que resuelvan problemas concretos: desde plataformas
          para clientes y negocios pequeños hasta flujos de verificación donde la precisión importa.
        </p>
      </div>
    </Section>
  )
}

function ExperienceSection() {
  return (
    <Section id="experiencia" eyebrow="Experiencia" title="Trabajo en entornos donde el código debe responder a contexto real.">
      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="grid gap-6 rounded-lg border border-white/10 bg-black/35 p-6 md:grid-cols-[0.35fr_0.65fr]"
          >
            <div>
              <p className="font-mono text-sm text-amber-200">{item.period}</p>
              <p className="mt-3 text-sm text-stone-500">{item.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-100">{item.role}</h3>
              <p className="mt-1 text-sm text-teal-200">{item.company}</p>
              <p className="mt-4 leading-7 text-stone-300">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="border-l border-white/15 pl-4">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function ProjectsSection() {
  return (
    <Section id="proyectos" eyebrow="Proyectos" title="Casos que muestran producto, arquitectura, datos e impacto social.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="rounded-lg border border-white/10 bg-stone-950/70 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-200">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-100">{project.name}</h3>
              </div>
              <p className="rounded-md border border-amber-200/20 px-3 py-1 font-mono text-xs text-amber-200">{project.year}</p>
            </div>

            <p className="mt-5 leading-7 text-stone-300">{project.description}</p>
            <p className="mt-4 text-sm leading-6 text-stone-500">{project.impact}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-stone-300">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function SkillsSection() {
  return (
    <Section id="stack" eyebrow="Stack" title="Herramientas organizadas por el tipo de problema que resuelven.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-white/10 bg-black/35 p-6">
            <h3 className="text-lg font-medium text-stone-100">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md bg-stone-900 px-3 py-2 text-sm text-stone-300 ring-1 ring-white/10">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function EducationSection() {
  return (
    <Section id="formacion" eyebrow="Formación" title="Base académica, certificaciones y liderazgo.">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <article key={`${item.title}-${item.period}`} className="rounded-lg border border-white/10 bg-stone-950/70 p-6">
              <p className="font-mono text-sm text-amber-200">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-stone-100">{item.title}</h3>
              <p className="mt-1 text-sm text-teal-200">{item.institution}</p>
              <p className="mt-4 text-sm leading-7 text-stone-400">{item.details}</p>
            </article>
          ))}
        </div>

        <aside className="rounded-lg border border-white/10 bg-black/35 p-6">
          <h3 className="text-xl font-semibold text-stone-100">Liderazgo e intereses</h3>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-400">
            {leadership.map((item) => (
              <li key={item} className="border-l border-teal-200/30 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}

function ContactSection() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-stone-100 text-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-600">Contacto</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Hablemos de producto, código o IA aplicada.</h2>
        </div>

        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <ContactLink label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactLink label="Teléfono" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, '')}`} />
          <ContactLink label="GitHub" value="github.com/sergiolejarde" href={contact.github} />
          <ContactLink label="LinkedIn" value="linkedin.com/in/sergio-lejarde" href={contact.linkedin} />
        </div>
      </div>
    </section>
  )
}

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-lg border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
    >
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">{label}</span>
      <span className="mt-3 block break-words text-base font-medium text-black">{value}</span>
    </a>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-white/10 bg-[#080807]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber-200">{eyebrow}</p>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-stone-100 md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
