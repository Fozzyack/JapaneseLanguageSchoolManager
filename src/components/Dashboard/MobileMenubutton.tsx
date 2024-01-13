'use client'
import { NavbarButtonProps } from '@/types/Navbar'
import React from 'react'

const MobileMenubutton = ({open, handleOpen} : NavbarButtonProps) => {
    return (
        <button onClick={handleOpen} >
            {
                open ?
                    <div className='p-2 rounded-xl bg-saffron '>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </div>

                    :
                    <div className='p-2 rounded-xl bg-saffron'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </div>

            }
        </button>
    )
}

export default MobileMenubutton