import { lazy, Suspense, useState, useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage'
import CareersPage from './components/CareersPage'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'

const Hero3D = lazy(() => import('./components/Hero3D'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const PAGE_PREFIX = 'page/'

const pages = {
  about: AboutPage,
  careers: CareersPage,
  privacy: PrivacyPage,
  terms: TermsPage,
}

function getPageFromHash() {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith(PAGE_PREFIX)) {
    const name = hash.slice(PAGE_PREFIX.length)
    if (name in pages) return name
  }
  return null
}

function Spinner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(() => getPageFromHash())

  useEffect(() => {
    const onHashChange = () => {
      const p = getPageFromHash()
      setPage((prev) => (prev === p ? prev : p))
      if (!p) {
        const section = window.location.hash.replace(/^#/, '')
        if (section) {
          setTimeout(() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const section = window.location.hash.replace(/^#/, '')
    if (section && !getPageFromHash()) {
      const id = setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
      return () => clearTimeout(id)
    }
  }, [])

  const handleNavigate = useCallback((p) => {
    setPage(p)
    window.location.hash = `${PAGE_PREFIX}${p}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleBack = useCallback(() => {
    setPage(null)
    window.location.hash = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const PageComponent = page ? pages[page] : null

  if (PageComponent) {
    return (
      <div className="min-h-screen bg-[#0a0a1a]">
        <Navbar />
        <PageComponent onBack={handleBack} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Hero3D />
      </Suspense>
      <Suspense fallback={null}>
        <Services />
        <About />
        <Contact />
        <Footer onNavigate={handleNavigate} />
      </Suspense>
    </div>
  )
}
