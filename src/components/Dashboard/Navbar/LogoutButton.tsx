'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const LogoutButton = () => {
    return (
        <div className='flex w-full px-3 justify-center'>
            <Link href='/api/auth/signout'>
                <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className=' px-3 py-2 rounded-xl bg-saffron text-black'>
                        Logout
                    </span>
                </motion.div>

            </Link>
        </div>

    )
}

export default LogoutButton