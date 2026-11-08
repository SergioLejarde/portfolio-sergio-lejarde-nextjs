'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { contact, metrics, experience, education, skillGroups } from '@/data/profile'

type Language = 'en' | 'es'
type Theme = 'dark' | 'light'

const content = {
  en: {
    badge: 'v2.0 // FULL-STACK AGENT',
    nav: ['Work', 'Capabilities', 'Process', 'Experience', 'Resume'],
    theme: { dark: 'DARK', light: 'LIGHT' },
    heroKicker: '> sergio.init({ role: "Full-Stack Dev & Designer", status: "Available" })',
    heroTitlePrefix: 'Sergio builds digital products and web solutions you ',
    heroTitleAccent: 'actually want',
    heroTitleSuffix: ' to use.',
    heroText:
      'Web design, responsive UI, full-stack architecture and AI-assisted workflows built for clarity, execution speed and real-world impact.',
    available: 'AVAILABLE FOR FREELANCE & REMOTE ROLES',
    primaryCta: 'View selected work',
    secondaryCta: 'Open resume',
    location: 'Bucaramanga, Colombia (Remote)',
    degree: 'B.S. Systems Engineering, UPB (2026)',
    english: 'English B2 (TOEFL) / Spanish Native',
    tags: [
      { label: 'Web Design', color: 'fuchsia' },
      { label: 'Full-stack Dev', color: 'cyan' },
      { label: 'AI-assisted QA', color: 'amber' },
      { label: 'Cloud & DevOps', color: 'purple' },
      { label: 'Responsive UI', color: 'emerald' },
    ],
    terminalTitle: '@sergio/portfolio: ~/main [verified-build]',
    workBadge: '01 // SELECTED WORK',
    workTitle: 'Web Design & Full-stack Cases',
    workIntro:
      'Production apps and prototypes illustrating responsive architecture, visual hierarchy, product thinking and implementation rigor.',
    openProject: 'Open Project',
    requestDemo: 'Request Preview',
    capabilitiesBadge: '02 // CAPABILITIES & STACK',
    capabilitiesTitle: 'What I Deliver',
    capabilitiesIntro:
      'Core technical and design capabilities engineered to deliver value from day one without agency overhead.',
    processBadge: '03 // WORKFLOW PROCESS',
    processTitle: 'Execution Pipeline',
    processIntro:
      'From rough specs to verified production code. Every step is validated against usability and performance criteria.',
    experienceBadge: '04 // BACKGROUND & ROLES',
    experienceTitle: 'Experience & Milestones',
    experienceIntro:
      'Track record in freelance engineering, AI model evaluation, high-pressure technical operations and academic leadership.',
    resumeBadge: '05 // RESUME & CREDENTIALS',
    resumeTitle: 'Curriculum Vitae',
    resumeIntro: 'English resume available for recruiters, clients, and technical teams.',
    openPdf: 'Open PDF',
    downloadPdf: 'Download PDF',
    close: 'Close',
    contactBadge: '// GET IN TOUCH',
    contactTitle: 'Let’s build something useful.',
    contactText:
      'Send a brief, a draft or a product idea. I can help shape it into a scalable, production-ready web application.',
    footerCopy: 'Inspired by jules.google aesthetic. Built with Next.js, React and Tailwind CSS.',
  },
  es: {
    badge: 'v2.0 // FULL-STACK AGENT',
    nav: ['Trabajos', 'Capacidades', 'Proceso', 'Experiencia', 'CV'],
    theme: { dark: 'OSCURO', light: 'CLARO' },
    heroKicker: '> sergio.init({ rol: "Full-Stack Dev & Designer", estado: "Disponible" })',
    heroTitlePrefix: 'Sergio diseña y desarrolla experiencias digitales que ',
    heroTitleAccent: 'da gusto',
    heroTitleSuffix: ' usar.',
    heroText:
      'Diseño web, interfaces responsivas, arquitectura full-stack y flujos asistidos por IA pensados para claridad, velocidad de entrega e impacto real.',
    available: 'DISPONIBLE PARA TRABAJO FREELANCE Y REMOTO',
    primaryCta: 'Ver trabajos',
    secondaryCta: 'Ver CV',
    location: 'Bucaramanga, Colombia (Remoto)',
    degree: 'Ingeniería de Sistemas, UPB (2026)',
    english: 'Inglés B2 (TOEFL) / Español Nativo',
    tags: [
      { label: 'Diseño Web', color: 'fuchsia' },
      { label: 'Full-stack Dev', color: 'cyan' },
      { label: 'QA con IA', color: 'amber' },
      { label: 'Cloud y DevOps', color: 'purple' },
      { label: 'UI Responsive', color: 'emerald' },
    ],
    terminalTitle: '@sergio/portfolio: ~/main [verified-build]',
    workBadge: '01 // CASOS DESTACADOS',
    workTitle: 'Casos de diseño y desarrollo web',
    workIntro:
      'Aplicaciones en producción y prototipos que demuestran arquitectura responsiva, jerarquía visual y rigor de implementación.',
    openProject: 'Abrir Proyecto',
    requestDemo: 'Solicitar Preview',
    capabilitiesBadge: '02 // CAPACIDADES Y STACK',
    capabilitiesTitle: 'Lo que puedo entregar',
    capabilitiesIntro:
      'Capacidades técnicas y de diseño listas para generar valor desde el primer día, sin burocracia.',
    processBadge: '03 // PROCESO DE TRABAJO',
    processTitle: 'Pipeline de ejecución',
    processIntro:
      'Desde el requerimiento inicial hasta el código verificado en producción, cuidando usabilidad y rendimiento en cada paso.',
    experienceBadge: '04 // TRAYECTORIA Y ROLES',
    experienceTitle: 'Experiencia y logros',
    experienceIntro:
      'Historial en desarrollo freelance, evaluación de modelos de IA, soporte técnico de alta criticidad y liderazgo.',
    resumeBadge: '05 // CURRÍCULUM Y CREDENCIALES',
    resumeTitle: 'Currículum Vitae',
    resumeIntro: 'CV en inglés disponible para reclutadores, clientes y equipos técnicos.',
    openPdf: 'Abrir PDF',
    downloadPdf: 'Descargar PDF',
    close: 'Cerrar',
    contactBadge: '// CONTACTO',
    contactTitle: 'Diseñemos y construyamos algo útil.',
    contactText:
      'Envíame un brief, un borrador o una idea de producto. Puedo ayudarte a convertirlo en una experiencia web lista para producción.',
    footerCopy: 'Inspirado en la estética de jules.google. Desarrollado con Next.js, React y Tailwind CSS.',
  },
}

const workCases = [
  {
    title: 'GamesTop',
    repo: 'sergiolejarde/gamestop-dashboard',
    image: '/work/gamestop.png',
    href: 'https://main.d2799uy4ua8s4e.amplifyapp.com/dashboard',
    status: 'LIVE APP',
    kind: { en: 'Product Dashboard & Storefront', es: 'Dashboard de producto y catálogo' },
    copy: {
      en: 'A high-contrast game-discovery interface with dynamic search, carousel navigation, user auth integration and modular content sections.',
      es: 'Una interfaz oscura de descubrimiento de videojuegos con búsqueda dinámica, carruseles, integración de auth y secciones modulares de alto impacto.',
    },
    tags: [
      { name: 'Responsive UI', color: 'cyan' },
      { name: 'React / Next.js', color: 'purple' },
      { name: 'AWS Amplify', color: 'amber' },
      { name: 'Auth Flows', color: 'fuchsia' },
    ],
  },
  {
    title: 'PawCampus',
    repo: 'upb-innovation/pawcampus-iot',
    image: '/work/pawcampus.png',
    href: 'https://www.pawcampusapp.com/',
    status: 'CAMPUS PROD',
    kind: { en: 'IoT & Social Impact Web/Mobile', es: 'App Web/Móvil e IoT de impacto social' },
    copy: {
      en: 'An ecosystem for animal monitoring across university campuses, connecting smart feeders, solar surveillance cameras and QR identification.',
      es: 'Plataforma para el cuidado animal universitario que integra comederos automatizados, cámaras solares, QR y coordinación de voluntarios.',
    },
    tags: [
      { name: 'Flutter & Web', color: 'cyan' },
      { name: 'IoT Telemetry', color: 'purple' },
      { name: 'QR Tracking', color: 'emerald' },
      { name: 'UX/UI Architecture', color: 'fuchsia' },
    ],
  },
  {
    title: 'Buena Vida',
    repo: 'sergiolejarde/buenavida-ecommerce',
    image: null,
    href: `mailto:${contact.email}?subject=Buena%20Vida%20case%20study`,
    status: 'PROTOTYPE',
    kind: { en: 'Modular Natural Commerce Prototype', es: 'Prototipo de e-commerce modular' },
    copy: {
      en: 'A clean organic product commerce flow engineered with hexagonal architecture, relational SQL catalog structures and maintainable design patterns.',
      es: 'Flujo de comercio para productos naturales diseñado con arquitectura hexagonal, modelos relacionales en SQL y patrones modulares listos para producción.',
    },
    tags: [
      { name: 'Hexagonal Arch', color: 'purple' },
      { name: 'SQL Schema', color: 'amber' },
      { name: 'Node.js', color: 'cyan' },
      { name: 'Design Patterns', color: 'fuchsia' },
    ],
  },
]

const capabilitiesList = [
  {
    number: '01',
    color: 'cyan',
    en: {
      title: 'Conversion Layouts & Landing Pages',
      desc: 'High-clarity one-pagers, marketing funnels and pitch interfaces with intentional visual hierarchy and frictionless user flows.',
    },
    es: {
      title: 'Layouts de conversión y landing pages',
      desc: 'One-pagers, embudos de producto y sitios pitch con jerarquía visual calculada y flujos de usuario directos.',
    },
  },
  {
    number: '02',
    color: 'fuchsia',
    en: {
      title: 'Figma Systems & Responsive UI',
      desc: 'Scalable component libraries, auto-layout foundations, tokenized typography and spacing systems prepared for fast implementation.',
    },
    es: {
      title: 'Sistemas en Figma e interfaces responsivas',
      desc: 'Librerías de componentes reutilizables, auto-layout, tokens de diseño y reglas de espaciado diseñadas para entrega rápida.',
    },
  },
  {
    number: '03',
    color: 'purple',
    en: {
      title: 'Full-stack & Modern Frameworks',
      desc: 'Next.js, React, TypeScript, Python, Node.js and Flutter pipelines connected to databases and cloud services (AWS, Firebase, Render).',
    },
    es: {
      title: 'Desarrollo full-stack y cloud',
      desc: 'Next.js, React, TypeScript, Python, Node.js y Flutter conectados a bases de datos relacionales y cloud (AWS, Firebase, Render).',
    },
  },
  {
    number: '04',
    color: 'amber',
    en: {
      title: 'AI QA & Human-in-the-Loop Validation',
      desc: 'Rigorous LLM evaluation, structured prompting, factual cross-verification and error mitigation to keep AI outputs consistent and audit-ready.',
    },
    es: {
      title: 'QA de IA y validación humana',
      desc: 'Evaluación exhaustiva de LLMs, estrategias de prompting, verificación de fuentes y mitigación de errores para salidas confiables.',
    },
  },
]

const processSteps = [
  {
    step: '1',
    color: 'purple',
    en: { title: 'Brief & Scope Mapping', desc: 'Distill core goals, audience expectations and functional must-haves.' },
    es: { title: 'Mapeo del brief', desc: 'Claridad en metas centrales, expectativas de usuario y requerimientos funcionales.' },
  },
  {
    step: '2',
    color: 'cyan',
    en: { title: 'Wireframe Rhythm', desc: 'Establish spatial cadence, content hierarchy and mobile-first auto-layout.' },
    es: { title: 'Ritmo de wireframe', desc: 'Definición de cadencia espacial, jerarquía de contenido y estructura mobile-first.' },
  },
  {
    step: '3',
    color: 'fuchsia',
    en: { title: 'Visual Direction', desc: 'Craft typography, color harmonies and interactive tokens with crisp identity.' },
    es: { title: 'Dirección visual', desc: 'Tipografía, armonía de color, tokens de estilo e identidad visual de alto impacto.' },
  },
  {
    step: '4',
    color: 'amber',
    en: { title: 'Code & Responsive QA', desc: 'Production-ready component build, cross-device testing and performance audit.' },
    es: { title: 'Código y QA responsive', desc: 'Construcción con componentes limpios, pruebas multi-dispositivo y auditoría.' },
  },
  {
    step: '5',
    color: 'emerald',
    en: { title: 'Deployment & Handoff', desc: 'CI/CD pipeline, documentation, clear specs and production release.' },
    es: { title: 'Despliegue y handoff', desc: 'Pipeline de CI/CD, documentación, especificaciones claras y salida a producción.' },
  },
]

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('es')
  const [theme, setTheme] = useState<Theme>('dark')
  const [resumeOpen, setResumeOpen] = useState(false)

  const t = content[language]
  const otherTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className={`site-shell theme-${theme} min-h-screen text-[var(--text)] transition-colors duration-200`}>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={() => setTheme(otherTheme)}
        openResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero t={t} language={language} openResume={() => setResumeOpen(true)} />
        <PixelDivider />
        <MetricsBanner metrics={metrics} />
        <WorkSection t={t} language={language} />
        <PixelDivider />
        <CapabilitiesSection t={t} language={language} />
        <SkillsSection language={language} />
        <PixelDivider />
        <ProcessSection t={t} language={language} />
        <PixelDivider />
        <ExperienceSection t={t} language={language} />
        <PixelDivider />
        <ResumeSection t={t} openResume={() => setResumeOpen(true)} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />

      {resumeOpen && <ResumeDialog t={t} onClose={() => setResumeOpen(false)} />}
    </div>
  )
}

/* ========================================================================= */
/* HEADER COMPONENT (JULES STYLE)                                           */
/* ========================================================================= */
function Header({
  t,
  language,
  setLanguage,
  theme,
  toggleTheme,
  openResume,
}: {
  t: (typeof content)[Language]
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  toggleTheme: () => void
  openResume: () => void
}) {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-purple-900/60 bg-[#150133]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Jules Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          {/* Pixel Icon Glyph */}
          <div className="flex h-8 w-8 items-center justify-center bg-purple-900/60 border-2 border-purple-500 rounded-pixel-sm text-cyan-400 group-hover:border-cyan-400 group-hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              shapeRendering="crispEdges"
              fill="currentColor"
            >
              <path d="M4 3h16v2H4V3zm-2 4h20v2H2V7zm0 4h6v2H2v-2zm14 0h6v2h-6v-2zm-14 4h20v2H2v-2zm2 4h16v2H4v-2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm md:text-base font-black tracking-wider text-white">
              SERGIO LEJARDE
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-purple-400 tracking-widest -mt-1">
              FULL-STACK AGENT
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-purple-200">
          <a href="#work" className="hover:text-cyan-400 transition-colors">
            {t.nav[0]}
          </a>
          <a href="#capabilities" className="hover:text-cyan-400 transition-colors">
            {t.nav[1]}
          </a>
          <a href="#process" className="hover:text-cyan-400 transition-colors">
            {t.nav[2]}
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            {t.nav[3]}
          </a>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Switch */}
          <div className="flex border-2 border-purple-800 bg-[#09051c] p-0.5">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 font-mono text-xs font-bold transition ${
                language === 'es' ? 'bg-cyan-400 text-cyan-950' : 'text-purple-300 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 font-mono text-xs font-bold transition ${
                language === 'en' ? 'bg-cyan-400 text-cyan-950' : 'text-purple-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden sm:inline-flex border-2 border-purple-800 bg-[#09051c] px-2.5 py-1 font-mono text-xs font-bold text-purple-300 hover:border-purple-600 hover:text-white transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? '☀️ CLARO' : '🌙 OSCURO'}
          </button>

          {/* Jules Signature Button: Primary CTA */}
          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center justify-center px-3.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold bg-purple-600 text-purple-50 hover:bg-purple-500 border-b-4 border-purple-900 active:translate-y-0.5 transition shadow-[0_0_15px_rgba(168,85,247,0.35)]"
          >
            {t.nav[4]}
          </button>
        </div>
      </nav>
    </header>
  )
}

/* ========================================================================= */
/* HERO SECTION (JULES STYLE)                                               */
/* ========================================================================= */
function Hero({
  t,
  language,
  openResume,
}: {
  t: (typeof content)[Language]
  language: Language
  openResume: () => void
}) {
  return (
    <section id="home" className="relative px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 max-w-7xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Headlines & Chunky Badges */}
        <div>
          {/* Terminal Prompt Kicker */}
          <div className="inline-flex items-center gap-2 border-2 border-purple-800 bg-[#09051c] px-3 py-1 font-mono text-xs text-purple-300">
            <span className="h-2 w-2 bg-cyan-400 animate-pulse" />
            <span className="font-bold">{t.heroKicker}</span>
          </div>

          {/* Signature Jules Headline with chunky underlined accent */}
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
            {t.heroTitlePrefix}
            <span className="border-b-4 border-purple-400 pb-1 text-white inline-block">
              {t.heroTitleAccent}
            </span>
            {t.heroTitleSuffix}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base md:text-lg text-purple-200 leading-relaxed font-mono">
            {t.heroText}
          </p>

          {/* Chunky Multi-colored Badges in Jules Style */}
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tags.map((tag) => {
              const colorClasses =
                tag.color === 'fuchsia'
                  ? 'bg-fuchsia-400 text-fuchsia-950 border-fuchsia-600'
                  : tag.color === 'cyan'
                  ? 'bg-cyan-400 text-cyan-950 border-cyan-600'
                  : tag.color === 'amber'
                  ? 'bg-amber-400 text-amber-950 border-amber-600'
                  : tag.color === 'emerald'
                  ? 'bg-emerald-400 text-emerald-950 border-emerald-600'
                  : 'bg-purple-400 text-purple-950 border-purple-600'

              return (
                <span
                  key={tag.label}
                  className={`inline-block font-mono text-xs md:text-sm font-bold px-2.5 py-1 border-b-2 ${colorClasses}`}
                >
                  {tag.label}
                </span>
              )
            })}
          </div>

          {/* Jules Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Cyan Border Arcade Button */}
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-sm font-bold border-4 border-cyan-400 text-white bg-transparent hover:bg-cyan-400 hover:text-cyan-950 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" />
              </svg>
              {t.primaryCta}
            </a>

            {/* Solid Purple Push-button */}
            <button
              type="button"
              onClick={openResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-sm font-bold bg-purple-600 text-purple-50 hover:bg-purple-500 border-b-4 border-purple-900 active:translate-y-0.5 transition shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              {t.secondaryCta}
            </button>
          </div>
        </div>

        {/* Right Column: Jules-style Terminal Diff Window */}
        <aside className="relative">
          <div className="border-4 border-purple-800 bg-[#09051c] shadow-[0_0_30px_rgba(120,79,207,0.25)]">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between border-b-2 border-purple-800 bg-[#160838] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-red-400 border border-red-600" />
                <span className="h-3 w-3 bg-amber-400 border border-amber-600" />
                <span className="h-3 w-3 bg-cyan-400 border border-cyan-600" />
              </div>
              <span className="font-mono text-xs text-purple-300 font-bold truncate max-w-[240px]">
                {t.terminalTitle}
              </span>
              <span className="text-[10px] font-mono font-bold bg-cyan-400 text-cyan-950 px-1.5 py-0.5">
                PROD
              </span>
            </div>

            {/* Terminal Session / Code Diff */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-purple-100 overflow-x-auto space-y-2">
              <p className="text-purple-400">
                <span className="text-cyan-400">$</span> cat sergio.config.json
              </p>
              <div className="pl-2 border-l-2 border-purple-800 space-y-1">
                <p>
                  <span className="text-purple-400">&quot;developer&quot;:</span> &quot;{contact.displayName}&quot;,
                </p>
                <p>
                  <span className="text-purple-400">&quot;location&quot;:</span> &quot;{t.location}&quot;,
                </p>
                <p>
                  <span className="text-purple-400">&quot;education&quot;:</span> &quot;{t.degree}&quot;,
                </p>
                <p>
                  <span className="text-purple-400">&quot;languages&quot;:</span> &quot;{t.english}&quot;,
                </p>
              </div>

              <p className="pt-2 text-purple-400">
                <span className="text-cyan-400">$</span> sergio.getCapabilities()
              </p>

              {/* Diff Lines */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center px-2 py-0.5 bg-cyan-400/10 text-cyan-300 border-l-2 border-cyan-400 font-bold">
                  + [FAST_DELIVERY]: +40% faster CI/CD deployment pipelines
                </div>
                <div className="flex items-center px-2 py-0.5 bg-purple-500/10 text-purple-200 border-l-2 border-purple-400 font-bold">
                  + [CLOUD_READY]: 2x AWS Academy Certifications (Cloud &amp; ML)
                </div>
                <div className="flex items-center px-2 py-0.5 bg-amber-400/10 text-amber-300 border-l-2 border-amber-400 font-bold">
                  + [AI_WORKFLOWS]: Human-in-the-loop QA &amp; LLM reasoning verification
                </div>
                <div className="flex items-center px-2 py-0.5 bg-fuchsia-400/10 text-fuchsia-300 border-l-2 border-fuchsia-400 font-bold">
                  + [STATUS]: {t.available}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-purple-400 border-t border-purple-800/80 mt-4">
                <span>{'0 errors // 0 warnings'}</span>
                <span className="text-cyan-400 font-bold animate-pulse">● LIVE READY</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

/* ========================================================================= */
/* METRICS BANNER (JULES RETRO STATS)                                       */
/* ========================================================================= */
function MetricsBanner({
  metrics,
}: {
  metrics: { value: string; label: string }[]
}) {
  return (
    <section className="px-4 py-8 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => {
          const accentBorder =
            idx === 0
              ? 'border-purple-600 text-purple-300'
              : idx === 1
              ? 'border-cyan-400 text-cyan-300'
              : idx === 2
              ? 'border-amber-400 text-amber-300'
              : 'border-fuchsia-400 text-fuchsia-300'

          return (
            <div
              key={item.value}
              className={`border-4 bg-[#09051c] p-4 md:p-5 flex flex-col justify-between ${accentBorder} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
            >
              <span className="font-mono text-2xl md:text-4xl font-black text-white">
                {item.value}
              </span>
              <p className="mt-3 font-mono text-xs leading-snug text-purple-200 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ========================================================================= */
/* SELECTED WORK SECTION (JULES RETRO CARDS)                                */
/* ========================================================================= */
function WorkSection({
  t,
  language,
}: {
  t: (typeof content)[Language]
  language: Language
}) {
  return (
    <section id="work" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2.5 py-1">
          {t.workBadge}
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black text-white tracking-tight">
          {t.workTitle}
        </h2>
        <p className="mt-3 max-w-3xl font-mono text-sm md:text-base text-purple-200">
          {t.workIntro}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {workCases.map((item) => (
          <article
            key={item.title}
            className="border-4 border-purple-800 bg-[#09051c] hover:border-cyan-400 transition-colors duration-200 overflow-hidden shadow-[0_0_25px_rgba(58,12,129,0.3)]"
          >
            {/* Window Topbar */}
            <div className="flex items-center justify-between border-b-2 border-purple-800 bg-[#150a33] px-4 py-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="h-2 w-2 bg-purple-400" />
                <span className="font-bold text-white">{item.repo}</span>
              </div>
              <span className="font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-700 px-2 py-0.5 text-[10px]">
                {item.status}
              </span>
            </div>

            {/* Card Body */}
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 p-5 md:p-8">
              {/* Image Frame */}
              <div className="relative min-h-[220px] md:min-h-[280px] bg-[#1a0a38] border-2 border-purple-800/80 overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover pixelated-img transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="p-8 text-center font-mono text-xs uppercase tracking-widest text-purple-400">
                    <div className="h-12 w-12 mx-auto mb-3 border-2 border-purple-500 flex items-center justify-center text-cyan-400 font-bold">
                      &lt;/&gt;
                    </div>
                    {language === 'en' ? 'Live Prototype Available on Request' : 'Prototipo disponible bajo solicitud'}
                  </div>
                )}
              </div>

              {/* Content Description */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    {item.kind[language]}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-4xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-mono text-sm leading-relaxed text-purple-200">
                    {item.copy[language]}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => {
                      const tagColor =
                        tag.color === 'cyan'
                          ? 'bg-cyan-400 text-cyan-950 border-cyan-600'
                          : tag.color === 'purple'
                          ? 'bg-purple-400 text-purple-950 border-purple-600'
                          : tag.color === 'amber'
                          ? 'bg-amber-400 text-amber-950 border-amber-600'
                          : tag.color === 'emerald'
                          ? 'bg-emerald-400 text-emerald-950 border-emerald-600'
                          : 'bg-fuchsia-400 text-fuchsia-950 border-fuchsia-600'

                      return (
                        <span
                          key={tag.name}
                          className={`font-mono text-xs font-bold px-2 py-0.5 border-b-2 ${tagColor}`}
                        >
                          {tag.name}
                        </span>
                      )
                    })}
                  </div>

                  {/* Open Project CTA */}
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 font-mono text-sm font-bold px-4 py-2 bg-purple-600 text-purple-50 hover:bg-purple-500 border-b-4 border-purple-900 active:translate-y-0.5 transition shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <span>{item.href.startsWith('http') ? t.openProject : t.requestDemo}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ========================================================================= */
/* CAPABILITIES SECTION (JULES MULTI-COLOR CARDS)                           */
/* ========================================================================= */
function CapabilitiesSection({
  t,
  language,
}: {
  t: (typeof content)[Language]
  language: Language
}) {
  return (
    <section id="capabilities" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-950/60 border border-fuchsia-800 px-2.5 py-1">
          {t.capabilitiesBadge}
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black text-white tracking-tight">
          {t.capabilitiesTitle}
        </h2>
        <p className="mt-3 max-w-3xl font-mono text-sm md:text-base text-purple-200">
          {t.capabilitiesIntro}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {capabilitiesList.map((item) => {
          const accentClass =
            item.color === 'cyan'
              ? 'border-t-4 border-t-cyan-400'
              : item.color === 'fuchsia'
              ? 'border-t-4 border-t-fuchsia-400'
              : item.color === 'purple'
              ? 'border-t-4 border-t-purple-400'
              : 'border-t-4 border-t-amber-400'

          return (
            <article
              key={item.number}
              className={`border-4 border-purple-800 bg-[#09051c] p-6 md:p-8 flex flex-col justify-between ${accentClass}`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-purple-400 tracking-widest">
                  {'MODULE // '}{item.number}
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-black text-white">
                  {item[language].title}
                </h3>
                <p className="mt-4 font-mono text-sm leading-relaxed text-purple-200">
                  {item[language].desc}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

/* ========================================================================= */
/* SKILLS DIRECTORY (CATEGORIZED BADGES)                                     */
/* ========================================================================= */
function SkillsSection({ language }: { language: Language }) {
  return (
    <section className="px-4 py-8 md:px-8 max-w-7xl mx-auto">
      <div className="border-4 border-purple-800 bg-[#09051c] p-6 md:p-8">
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">
          {'// '}{language === 'en' ? 'ENGINEERING & DESIGN TOOLKIT' : 'TOOLKIT TÉCNICO Y DE DISEÑO'}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase text-white border-b-2 border-purple-800 pb-1">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-purple-900/60 text-purple-200 border border-purple-700 px-2 py-0.5 hover:border-cyan-400 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================= */
/* PROCESS SECTION (1-2-3-4-5 JULES STEP CARDS)                             */
/* ========================================================================= */
function ProcessSection({
  t,
  language,
}: {
  t: (typeof content)[Language]
  language: Language
}) {
  return (
    <section id="process" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800 px-2.5 py-1">
          {t.processBadge}
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black text-white tracking-tight">
          {t.processTitle}
        </h2>
        <p className="mt-3 max-w-3xl font-mono text-sm md:text-base text-purple-200">
          {t.processIntro}
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {processSteps.map((step) => {
          const numberBg =
            step.color === 'purple'
              ? 'bg-purple-600 text-purple-50'
              : step.color === 'cyan'
              ? 'bg-cyan-400 text-cyan-950'
              : step.color === 'fuchsia'
              ? 'bg-fuchsia-400 text-fuchsia-950'
              : step.color === 'amber'
              ? 'bg-amber-400 text-amber-950'
              : 'bg-emerald-400 text-emerald-950'

          return (
            <div
              key={step.step}
              className="border-4 border-purple-800 bg-[#09051c] p-5 flex flex-col justify-between"
            >
              <div>
                <span className={`inline-flex items-center justify-center h-8 w-8 font-mono text-sm font-black border-2 border-black ${numberBg}`}>
                  {step.step}
                </span>
                <h3 className="mt-4 font-mono text-base font-black text-white">
                  {step[language].title}
                </h3>
              </div>
              <p className="mt-4 font-mono text-xs leading-relaxed text-purple-200">
                {step[language].desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ========================================================================= */
/* EXPERIENCE & MILESTONES SECTION                                          */
/* ========================================================================= */
function ExperienceSection({
  t,
  language,
}: {
  t: (typeof content)[Language]
  language: Language
}) {
  return (
    <section id="experience" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800 px-2.5 py-1">
          {t.experienceBadge}
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black text-white tracking-tight">
          {t.experienceTitle}
        </h2>
        <p className="mt-3 max-w-3xl font-mono text-sm md:text-base text-purple-200">
          {t.experienceIntro}
        </p>
      </div>

      <div className="grid gap-6">
        {experience.map((item) => (
          <div
            key={item.role + item.company}
            className="border-4 border-purple-800 bg-[#09051c] p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-purple-800/80 pb-4 mb-4 gap-2">
              <div>
                <h3 className="font-mono text-xl font-black text-white">{item.role}</h3>
                <p className="font-mono text-sm text-cyan-400 font-bold">{item.company} • {item.location}</p>
              </div>
              <span className="font-mono text-xs font-bold bg-purple-900 text-purple-200 px-3 py-1 border border-purple-700 self-start md:self-auto">
                {item.period}
              </span>
            </div>

            <p className="font-mono text-sm text-purple-200 mb-4">{item.summary}</p>

            <ul className="space-y-1.5 font-mono text-xs text-purple-300">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">▶</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ========================================================================= */
/* RESUME SECTION                                                           */
/* ========================================================================= */
function ResumeSection({
  t,
  openResume,
}: {
  t: (typeof content)[Language]
  openResume: () => void
}) {
  return (
    <section id="resume" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="border-4 border-purple-800 bg-[#09051c] p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.resumeBadge}
          </span>
          <h2 className="mt-2 text-2xl md:text-4xl font-black text-white">
            {contact.displayName} — {t.resumeTitle}
          </h2>
          <p className="mt-2 font-mono text-sm text-purple-200 max-w-xl">
            {t.resumeIntro}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-bold bg-purple-600 text-purple-50 hover:bg-purple-500 border-b-4 border-purple-900 active:translate-y-0.5 transition shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <span>{t.openPdf}</span>
            <span>↗</span>
          </button>
          <a
            href={contact.cv}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-bold border-4 border-cyan-400 text-white bg-transparent hover:bg-cyan-400 hover:text-cyan-950 transition-colors"
          >
            <span>{t.downloadPdf}</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ========================================================================= */
/* CONTACT SECTION                                                          */
/* ========================================================================= */
function ContactSection({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 max-w-7xl mx-auto">
      <div className="border-4 border-cyan-400 bg-[#09051c] p-6 md:p-12 shadow-[0_0_35px_rgba(34,211,238,0.2)]">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
              {t.contactBadge}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-white leading-tight">
              {t.contactTitle}
            </h2>
            <p className="mt-4 font-mono text-sm md:text-base text-purple-200 leading-relaxed max-w-xl">
              {t.contactText}
            </p>
          </div>

          <div className="border-t-2 lg:border-t-0 lg:border-l-2 border-purple-800 pt-6 lg:pt-0 lg:pl-8 space-y-3 font-mono text-xs md:text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 p-2.5 bg-purple-950/60 border border-purple-800 hover:border-cyan-400 text-white transition-colors"
            >
              <span className="text-cyan-400 font-bold">&gt; email:</span>
              <span className="truncate">{contact.email}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2.5 bg-purple-950/60 border border-purple-800 hover:border-cyan-400 text-white transition-colors"
            >
              <span className="text-cyan-400 font-bold">&gt; linkedin:</span>
              <span>/in/sergio-lejarde</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2.5 bg-purple-950/60 border border-purple-800 hover:border-cyan-400 text-white transition-colors"
            >
              <span className="text-cyan-400 font-bold">&gt; github:</span>
              <span>@sergiolejarde</span>
            </a>
            <div className="flex items-center gap-2 p-2.5 bg-purple-950/60 border border-purple-800 text-purple-300">
              <span className="text-cyan-400 font-bold">&gt; phone:</span>
              <span>{contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================================================================= */
/* FOOTER COMPONENT                                                         */
/* ========================================================================= */
function Footer({ t }: { t: (typeof content)[Language] }) {
  return (
    <footer className="border-t-4 border-purple-900/60 bg-[#09051c] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-purple-300">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-cyan-400 animate-pulse" />
          <span>© 2026 Sergio Lejarde • All Rights Reserved</span>
        </div>
        <p className="text-center md:text-right text-purple-400">
          {t.footerCopy}
        </p>
      </div>
    </footer>
  )
}

/* ========================================================================= */
/* RESUME MODAL DIALOG                                                      */
/* ========================================================================= */
function ResumeDialog({
  t,
  onClose,
}: {
  t: (typeof content)[Language]
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 md:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex h-full w-full max-w-5xl flex-col border-4 border-cyan-400 bg-[#09051c] shadow-[0_0_50px_rgba(34,211,238,0.4)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b-2 border-purple-800 bg-[#160838] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-red-400" />
            <span className="h-3 w-3 bg-amber-400" />
            <span className="h-3 w-3 bg-cyan-400" />
            <span className="ml-2 font-mono text-xs font-bold text-white uppercase tracking-wider">
              {contact.displayName} — {t.resumeTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.cv}
              download
              className="font-mono text-xs font-bold px-3 py-1 bg-cyan-400 text-cyan-950 hover:bg-cyan-300"
            >
              {t.downloadPdf}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="font-mono text-xs font-bold px-3 py-1 bg-purple-600 text-white hover:bg-purple-500"
            >
              {t.close} [X]
            </button>
          </div>
        </div>

        {/* PDF Iframe */}
        <div className="relative flex-1 bg-zinc-900">
          <iframe
            src={contact.cv}
            title="Sergio Lejarde Resume PDF"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  )
}

/* ========================================================================= */
/* DECORATIVE PIXEL DIVIDER (JULES STRIP)                                    */
/* ========================================================================= */
function PixelDivider() {
  return (
    <div
      className="w-full h-4 my-6 bg-repeat-x pattern-dot-three border-y-2 border-purple-900/60 opacity-80"
      aria-hidden="true"
    />
  )
}
