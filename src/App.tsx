import { ErrorBoundary } from './components/ErrorBoundary'
import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import Agents from './components/Agents'
import PatientJourney from './components/PatientJourney'
import DesignedToFit from './components/DesignedToFit'
import Safety from './components/Safety'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-white font-sans overflow-x-hidden">
      <ErrorBoundary name="AnnouncementBar"><AnnouncementBar /></ErrorBoundary>
      <ErrorBoundary name="Nav"><Nav /></ErrorBoundary>
      <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>
      <ErrorBoundary name="Problem"><Problem /></ErrorBoundary>
      <ErrorBoundary name="Features"><Features /></ErrorBoundary>
      <ErrorBoundary name="Agents"><Agents /></ErrorBoundary>
      <ErrorBoundary name="PatientJourney"><PatientJourney /></ErrorBoundary>
      <ErrorBoundary name="DesignedToFit"><DesignedToFit /></ErrorBoundary>
      <ErrorBoundary name="Safety"><Safety /></ErrorBoundary>
      <ErrorBoundary name="CTA"><CTA /></ErrorBoundary>
      <ErrorBoundary name="Footer"><Footer /></ErrorBoundary>
    </div>
  )
}

export default App
