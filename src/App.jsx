import React from 'react'
import Navbar from './components/common/Navbar/Navbar'
import { Footer } from './components/common/Footer'
import { heroData } from './components/constants/heroConstants'
import { Hero } from './components/common/Hero/Hero'
import Destinations from './pages/Destinations'
import Attractions from './pages/Attractions'
import PracticalAdviceSection from './components/Advice/PracticalAdviceSection'
import SectionTitle from './components/common/SectionTitle'
import { adviceData } from './components/constants/adviceConstants'
import NearbySection from './components/NearbyPlaces/NearbySection'
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <div>
      <Navbar/>
        <Hero
        image={heroData.hampi.image}
        title={heroData.hampi.title}
        subtitle={heroData.hampi.subtitle}
      />
      <Destinations/>
      <Attractions />
      <PracticalAdviceSection  title={adviceData.sectionTitle} />
      <NearbySection/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
