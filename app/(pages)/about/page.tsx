import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Header
            imageSrc="/about-us-header-img.png" 
            text="About Us" 
            imageClass='min-h-48'
        />
    
        <Footer/>
    </div>
  )
}

export default About
