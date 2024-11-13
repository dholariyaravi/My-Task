import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import About from './About'
import Footer from './Footer'
import OurServices from './OurServices'
import Testimonials from './Testimonials'
import CaseStudies from './CaseStudies'

export default function Index() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <About />
      <OurServices />
      <Testimonials />
      <CaseStudies />
      <Footer />
    </div>
  )
}
