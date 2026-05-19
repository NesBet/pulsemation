import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'

const Hero3D = lazy(() => import('./components/Hero3D'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function Spinner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
    </div>
  )
}

export default function App() {
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
        <Footer />
      </Suspense>
    </div>
  )
}
