import { lazy, Suspense } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import LegalPage from './components/LegalPage'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { getLegalPage } from './legalContent'

const HowItWorks = lazy(() => import('./components/Features'))
const DesignedToFit = lazy(() => import('./components/DesignedToFit'))
const Pricing = lazy(() => import('./components/Pricing'))
const FAQ = lazy(() => import('./components/FAQ'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const legalPage = getLegalPage(window.location.pathname)

  if (legalPage) return <LegalPage page={legalPage} />

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <ErrorBoundary name="Nav"><Nav /></ErrorBoundary>
      <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>
      <Suspense fallback={null}>
        <ErrorBoundary name="HowItWorks"><HowItWorks /></ErrorBoundary>
        <ErrorBoundary name="DesignedToFit"><DesignedToFit /></ErrorBoundary>
        <ErrorBoundary name="Pricing"><Pricing /></ErrorBoundary>
        <ErrorBoundary name="FAQ"><FAQ /></ErrorBoundary>
        <ErrorBoundary name="CTA"><CTA /></ErrorBoundary>
        <ErrorBoundary name="Footer"><Footer /></ErrorBoundary>
      </Suspense>
    </div>
  )
}

export default App
