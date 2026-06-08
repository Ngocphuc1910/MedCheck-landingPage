import { ErrorBoundary } from './components/ErrorBoundary'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/Features'
import SeveritySection from './components/SeveritySection'
import DesignedToFit from './components/DesignedToFit'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Full-width — no container constraint */}
      <ErrorBoundary name="Nav"><Nav /></ErrorBoundary>
      <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>

      {/* Remaining sections — each controls its own inner max-width */}
<ErrorBoundary name="HowItWorks"><HowItWorks /></ErrorBoundary>
      {/* <ErrorBoundary name="SeveritySection"><SeveritySection /></ErrorBoundary> */}
      <ErrorBoundary name="DesignedToFit"><DesignedToFit /></ErrorBoundary>
      <ErrorBoundary name="Pricing"><Pricing /></ErrorBoundary>
      <ErrorBoundary name="FAQ"><FAQ /></ErrorBoundary>
      <ErrorBoundary name="CTA"><CTA /></ErrorBoundary>
      <ErrorBoundary name="Footer"><Footer /></ErrorBoundary>
    </div>
  )
}

export default App
