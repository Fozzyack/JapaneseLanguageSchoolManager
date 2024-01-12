
import Features from '@/components/Landing/Features'
import Hero from '@/components/Landing/Hero'
import LandingNavbar from '@/components/Landing/LandingNavbar'
import React from 'react'

const page = () => {
  return (
    <main className=' h-full bg-eblack'>
      <LandingNavbar />
      <Hero />
      <div className='md:px-32'>
        <Features />
      </div>
    </main>
  )
}

export default page