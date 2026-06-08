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
    <div className="min-h-screen bg-white font-sans">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <Agents />
      <PatientJourney />
      <DesignedToFit />
      <Safety />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
