import React from 'react'
import MobileNav from './MobileNav'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='fixed flex flex-col p-3 md:hidden'>
            <button className='p-2 rounded-xl bg-saffron w-[40px]' onClick={toggle}>
                {
                    isOpen ? (

                        <svg className="w-6 h-6 text-gray-800 dark:text-sblack" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-800 dark:text-sblack" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    )
                }
            </button>
            {
                isOpen && <MobileNav />
            }
            
        </div >
    )
}

export default MobileNavbar