'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '@/data/profile'

type Language = 'en' | 'es'
type Theme = 'dark' | 'light'

const content = {
  en: {
    nav: ['Work', 'Capabilities', 'Process', 'Resume'],
    theme: { dark: 'Dark', light: 'Light' },
    heroKicker: 'Web Design / Front-end / AI-assisted QA',
    heroTitle: 'Clean web experiences with a practical engineering backbone.',
    heroText:
      'I design and build responsive digital products, marketing pages and product interfaces that are easy to understand, easy to ship and consistent across touchpoints.',
    available: 'Available for freelance remote work',
    primaryCta: 'View selected work',
    secondaryCta: 'Open resume',
    location: 'Bucaramanga, Colombia',
    english: 'English B2 / TOEFL',
    degree: 'Systems Engineering, 2026',
    workTitle: 'Selected web design cases',
    workIntro:
      'Live products and prototypes that show layout decisions, responsive UI, visual hierarchy, product thinking and implementation awareness.',
    capabilitiesTitle: 'What I can deliver',
    capabilitiesIntro:
      'These are the capabilities I want recruiters and clients to find quickly, without turning the portfolio into a job-board checklist.',
    processTitle: 'Design process',
    processIntro:
      'I work from rough material to polished handoff, checking layout quality before anything is considered finished.',
    resumeTitle: 'Resume',
    resumeIntro: 'English resume available for recruiters, clients and freelance applications.',
    openPdf: 'Open PDF',
    downloadPdf: 'Download PDF',
    close: 'Close',
    contactTitle: 'Let’s design something useful.',
    contactText: 'Send a brief, a rough draft or a product idea. I can help shape it into a web-ready experience.',
  },
  es: {
    nav: ['Trabajos', 'Capacidades', 'Proceso', 'CV'],
    theme: { dark: 'Oscuro', light: 'Claro' },
    heroKicker: 'Diseño web / Front-end / QA asistido por IA',
    heroTitle: 'Experiencias web limpias con una base técnica sólida.',
    heroText:
      'Diseño y construyo productos digitales responsivos, landing pages e interfaces que se entienden rápido, se implementan bien y mantienen consistencia visual.',
    available: 'Disponible para trabajo freelance remoto',
    primaryCta: 'Ver trabajos',
    secondaryCta: 'Ver CV',
    location: 'Bucaramanga, Colombia',
    english: 'Inglés B2 / TOEFL',
    degree: 'Ingeniería de Sistemas, 2026',
    workTitle: 'Casos de diseño web',
    workIntro:
      'Productos y prototipos reales que muestran layout, UI responsive, jerarquía visual, criterio de producto y entendimiento de implementación.',
    capabilitiesTitle: 'Lo que puedo entregar',
    capabilitiesIntro:
      'Estas son las capacidades que un reclutador o cliente necesita encontrar rápido, sin que el portafolio parezca una solicitud de empleo pegada encima.',
    processTitle: 'Proceso de diseño',
    processIntro:
      'Trabajo desde material crudo hasta handoff pulido, revisando calidad visual antes de considerar cualquier entrega como terminada.',
    resumeTitle: 'CV',
    resumeIntro: 'CV en inglés disponible para reclutadores, clientes y aplicaciones freelance.',
    openPdf: 'Abrir PDF',
    downloadPdf: 'Descargar PDF',
    close: 'Cerrar',
    contactTitle: 'Diseñemos algo útil.',
    contactText: 'Envíame un brief, un borrador o una idea de producto. Puedo ayudarte a convertirlo en una experiencia web lista para publicar.',
  },
}

const work = [
  {
    title: 'GamesTop',
    image: '/work/gamestop.png',
    href: 'https://main.d2799uy4ua8s4e.amplifyapp.com/dashboard',
    kind: { en: 'Product dashboard', es: 'Dashboard de producto' },
    copy: {
      en: 'A dark game-discovery interface with search, carousel browsing, auth entry points and high-impact media sections.',
      es: 'Una interfaz oscura de descubrimiento de videojuegos con búsqueda, carruseles, acceso de usuarios y secciones visuales de alto impacto.',
    },
    tags: ['Responsive UI', 'Visual hierarchy', 'React / Next.js', 'Product navigation'],
  },
  {
    title: 'PawCampus',
    image: '/work/pawcampus.png',
    href: 'https://www.pawcampusapp.com/',
    kind: { en: 'Social impact app', es: 'App de impacto social' },
    copy: {
      en: 'A web/mobile product concept for campus animal care, QR identification, monitoring and stakeholder coordination.',
      es: 'Un concepto web/móvil para cuidado animal en campus, identificación QR, monitoreo y coordinación con actores universitarios.',
    },
    tags: ['UX/UI', 'Mobile-first thinking', 'Product strategy', 'Social impact'],
  },
  {
    title: 'Buena Vida',
    image: null,
    href: `mailto:${contact.email}?subject=Buena%20Vida%20case%20study`,
    kind: { en: 'Commerce prototype', es: 'Prototipo e-commerce' },
    copy: {
      en: 'A natural-products commerce flow designed around catalog clarity, relational data and implementation-ready sections.',
      es: 'Un flujo de comercio para productos naturales enfocado en claridad de catálogo, datos relacionales y secciones listas para implementar.',
    },
    tags: ['Landing flow', 'SQL model', 'Design patterns', 'Full-stack prototype'],
  },
]

const capabilities = [
  {
    en: ['Conversion layouts', 'One-pagers, pitch-style landing pages and simple marketing sites with clear hierarchy.'],
    es: ['Layouts de conversión', 'One-pagers, landing pages tipo pitch y sitios simples de marketing con jerarquía clara.'],
  },
  {
    en: ['Figma systems', 'Reusable components, auto-layout thinking, spacing rules and responsive frames.'],
    es: ['Sistemas en Figma', 'Componentes reutilizables, auto-layout, reglas de espaciado y frames responsivos.'],
  },
  {
    en: ['Developer handoff', 'Assets, specs and layout notes prepared for developers, Webflow, Framer or no-code workflows.'],
    es: ['Handoff a desarrollo', 'Assets, specs y notas de layout preparadas para developers, Webflow, Framer o flujos no-code.'],
  },
  {
    en: ['Visual consistency', 'Web pages aligned with PDFs, social visuals and pitch material through systematic QA.'],
    es: ['Consistencia visual', 'Páginas web alineadas con PDFs, piezas sociales y materiales de pitch mediante QA sistemático.'],
  },
]

const process = {
  en: ['Brief mapping', 'Wireframe rhythm', 'Visual direction', 'Responsive QA', 'Handoff package'],
  es: ['Lectura del brief', 'Ritmo de wireframe', 'Dirección visual', 'QA responsive', 'Paquete de handoff'],
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('dark')
  const [resumeOpen, setResumeOpen] = useState(false)

  const t = content[language]
  const themeLabel = t.theme[theme]
  const otherTheme = theme === 'dark' ? 'light' : 'dark'

  const structuredData = useMemo(
    () => ({
      name: contact.displayName,
      role: 'Web Designer & Full-stack Developer',
      location: t.location,
      english: t.english,
    }),
    [t.english, t.location],
  )

  return (
    <div className={`site-shell theme-${theme} min-h-screen text-[var(--text)]`}>
      <Header
        language={language}
        setLanguage={setLanguage}
        themeLabel={themeLabel}
        toggleTheme={() => setTheme(otherTheme)}
        navItems={t.nav}
        openResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero t={t} data={structuredData} openResume={() => setResumeOpen(true)} />
        <WorkSection language={language} t={t} />
        <CapabilitiesSection language={language} t={t} />
        <ProcessSection language={language} t={t} />
        <ResumeSection t={t} openResume={() => setResumeOpen(true)} />
        <ContactSection t={t} />
      </main>

      {resumeOpen && <ResumeDialog t={t} onClose={() => setResumeOpen(false)} />}
    </div>
  )
}

function Header({
  language,
  setLanguage,
  themeLabel,
  toggleTheme,
  navItems,
  openResume,
}: {
  language: Language
  setLanguage: (language: Language) => void
  themeLabel: string
  toggleTheme: () => void
  navItems: string[]
  openResume: () => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#home" className="font-mono text-sm uppercase tracking-[0.22em]">
          Sergio Lejarde
        </a>

        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] lg:flex">
          <a href="#work">{navItems[0]}</a>
          <a href="#capabilities">{navItems[1]}</a>
          <a href="#process">{navItems[2]}</a>
          <button type="button" onClick={openResume} className="transition hover:text-[var(--text)]">
            {navItems[3]}
          </button>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em]">
          <div className="flex rounded-full border border-[color:var(--line)] p-1">
            {(['en', 'es'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1.5 transition ${
                  language === item ? 'bg-[var(--text)] text-[var(--page-bg-solid)]' : 'text-[var(--muted)]'
                }`}
                aria-pressed={language === item}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[color:var(--line)] px-3 py-2 text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            {themeLabel}
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero({
  t,
  data,
  openResume,
}: {
  t: (typeof content)[Language]
  data: { name: string; role: string; location: string; english: string }
  openResume: () => void
}) {
  return (
    <section id="home" className="relative min-h-[88svh] overflow-hidden px-4 pb-12 pt-24 md:px-8 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,var(--hero-glow),transparent_38%),linear-gradient(180deg,transparent,rgba(0,0,0,0.12))]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{t.heroKicker}</p>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--soft)] md:text-xl md:leading-9">{t.heroText}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--page-bg-solid)] transition hover:scale-[1.02]"
            >
              {t.primaryCta}
            </a>
            <button
              type="button"
              onClick={openResume}
              className="rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium transition hover:border-[color:var(--text)]"
            >
              {t.secondaryCta}
            </button>
          </div>
        </motion.div>

        <motion.aside
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="rounded-3xl border border-[color:var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] md:p-7"
        >
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--page-bg-soft)] p-5">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{data.name}</p>
                <p className="mt-4 text-2xl font-semibold">{data.role}</p>
              </div>
              <div className="grid gap-3 border-t border-[color:var(--line)] pt-5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                <p>{data.location}</p>
                <p>{data.english}</p>
                <p>{t.degree}</p>
                <p>{t.available}</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

function WorkSection({ language, t }: { language: Language; t: (typeof content)[Language] }) {
  return (
    <Section id="work" label="01" title={t.workTitle} intro={t.workIntro}>
      <div className="grid gap-5">
        {work.map((item, index) => (
          <motion.article
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group grid overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[var(--panel)] lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="relative min-h-64 overflow-hidden bg-[var(--page-bg-soft)]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.title} interface screenshot`}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full min-h-64 items-center justify-center p-8 text-center font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  Case preview available on request
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{item.kind[language]}</p>
                <h3 className="mt-5 text-3xl font-semibold md:text-4xl">{item.title}</h3>
                <p className="mt-5 max-w-2xl leading-8 text-[var(--soft)]">{item.copy[language]}</p>
              </div>
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-7 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  {language === 'en' ? 'Open project' : 'Abrir proyecto'}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function CapabilitiesSection({ language, t }: { language: Language; t: (typeof content)[Language] }) {
  return (
    <Section id="capabilities" label="02" title={t.capabilitiesTitle} intro={t.capabilitiesIntro}>
      <div className="grid gap-px overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[var(--line)] md:grid-cols-2">
        {capabilities.map((item) => {
          const [title, copy] = item[language]
          return (
            <article key={title} className="bg-[var(--panel)] p-6 md:p-8">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-[var(--soft)]">{copy}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

function ProcessSection({ language, t }: { language: Language; t: (typeof content)[Language] }) {
  return (
    <Section id="process" label="03" title={t.processTitle} intro={t.processIntro}>
      <div className="grid gap-3 md:grid-cols-5">
        {process[language].map((step, index) => (
          <div key={step} className="rounded-3xl border border-[color:var(--line)] bg-[var(--panel)] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">0{index + 1}</p>
            <p className="mt-10 text-xl font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ResumeSection({ t, openResume }: { t: (typeof content)[Language]; openResume: () => void }) {
  return (
    <Section id="resume" label="04" title={t.resumeTitle} intro={t.resumeIntro}>
      <div className="rounded-3xl border border-[color:var(--line)] bg-[var(--panel)] p-6 md:flex md:items-center md:justify-between md:p-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{contact.name}</p>
          <p className="mt-3 text-2xl font-semibold">Web Designer & Full-stack Developer</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <button
            type="button"
            onClick={openResume}
            className="rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--page-bg-solid)]"
          >
            {t.openPdf}
          </button>
          <a href={contact.cv} download className="rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium">
            {t.downloadPdf}
          </a>
        </div>
      </div>
    </Section>
  )
}

function ContactSection({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[color:var(--line)] bg-[var(--inverse-panel)] p-6 text-[var(--inverse-text)] md:p-10 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">Contact</p>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{t.contactTitle}</h2>
          <p className="mt-6 max-w-xl leading-8 opacity-75">{t.contactText}</p>
        </div>
        <div className="self-end divide-y divide-current/20 border-y border-current/20 font-mono text-sm">
          <a className="block py-5" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="block py-5" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="block py-5" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ResumeDialog({ t, onClose }: { t: (typeof content)[Language]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] bg-black/70 p-3 backdrop-blur-md md:p-6" role="dialog" aria-modal="true">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-zinc-950 text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{t.resumeTitle}</p>
          <div className="flex items-center gap-2">
            <a href={contact.cv} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-2 text-xs">
              {t.openPdf}
            </a>
            <button type="button" onClick={onClose} className="rounded-full bg-white px-3 py-2 text-xs text-black">
              {t.close}
            </button>
          </div>
        </div>
        <iframe src={contact.cv} title="Sergio Lejarde resume" className="h-full w-full bg-white" />
      </div>
    </div>
  )
}

function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string
  label: string
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-5 md:grid-cols-[160px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{label}</p>
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--soft)]">{intro}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
