import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const AboutUs = () => {
  return (
    <div>
        <div className="w-full bg-gray-100 mx-auto">
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <div className="flex justify-center items-center font-Oswald tracking-wide text-xl">
            About Us launching soon
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AboutUs