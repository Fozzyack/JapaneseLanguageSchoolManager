'use client'
import { ABOUT_INFO } from '@/variables/landing'
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <div className='flex flex-col gap-10  md:grid md:grid-cols-4 0 py-20 text-center justify-center p-4 '>
            {
                ABOUT_INFO.map((info, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        >
                        <motion.div
                            whileHover={{ y: -5 }}
                            className=' flex flex-col gap-4  text-center p-6 border border-saffron bg-[#141414] shadow-xl w-full h-full'>
                            <h1 className='text-3xl font-bold text-saffron '>{info.feature}</h1>
                            <p className='text-white'>{info.description}</p>
                        </motion.div>

                    </motion.div>
                ))
            }
        </div>
    )
}

export default Features