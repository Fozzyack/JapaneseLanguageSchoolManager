'use client'
import { NAVBAR_LINKS } from '@/variables/landing'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navlinks from './Navlinks'

const LandingNavbar = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false)

    const handleOpen = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <div className='fixed text-white w-full p-5 bg-black bg-opacity-90'>
            <div className='flex flex-row justify-between'>
                <div className='flex md:gap-4 items-center justify-center'>
                    <Image src={'/LogoNBG.png'} alt='Logo' width={80} height={80} />
                    <h1 className='text-xl'>JLSManager</h1>
                    <button className='block md:hidden ml-4' onClick={handleOpen}>
                        {
                            navbarOpen ? (
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>)
                                : (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                )

                        }
                    </button>
                </div>
                <div className='md:flex flex-row gap-16 mr-20 items-center hidden'>
                    {
                        NAVBAR_LINKS.map((link, index) => (
                            <Navlinks link={link} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className={`${navbarOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    {
                        NAVBAR_LINKS.map((link, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{ delay: index * 0.1 }}
                            >
                                <Navlinks link={link} />
                            </motion.div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingNavbar