'use client'
import React from 'react'
import './landing.css'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { clientNavigate } from '@/functions/navigate'
import Image from 'next/image'



const Hero = () => {
    const router = useRouter()
    return (
        <div className='container-screen md:py-32 pt-32 md:px-32 flex flex-col md:grid md:grid-cols-12 bg-gradient-to-t from-eblack overflow-hidden  to-black text-center md:text-start'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className='col-span-6 items-center justify-center md:items-start flex flex-col gap-2 px-6 py-2'>
                <h3 className='font-bold text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-saffron to-bronze'>ようこそ !</h3>
                <h1 className='text-xl md:text-4xl font-bold text-white'>Transforming Students into Global Business Ninjas.</h1>
                <p className='text-white text-base'>Perth Japanese Language Schools learning management system</p>
                <div className='flex gap-4 flex-col md:flex-row w-full items-center md:items-start'>
                    <motion.button
                        whileHover={{ y: -5 }}
                        className='btn-padding bg-gradient-to-r from-saffron to-bronze text-white shadow-xl'
                        onClick={() => clientNavigate(router, '/dashboard')}
                    > Sign In</motion.button>
                    <button className='btn-padding border border-saffron text-saffron hover:bg-saffron hover:text-black transition ease-in-out duration-300'> Learn More</button>
                </div>
            </motion.div>
            <motion.div
                className='col-span-6 flex items-center justify-center'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Image src={'/Landing/HeroShiba.png'} alt='Shiba' width={2048} height={2048} />

            </motion.div>
        </div>
    )
}

export default Hero