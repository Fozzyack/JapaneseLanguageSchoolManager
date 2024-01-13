'use client'
import { NAV_LINKS } from '@/variables/Navbar'
import Link from 'next/link'
import React from 'react'

const SVG_ICONS = [
  {
    icon:
      <svg className="w-6 h-6 text-gray-800 dark:text-saffron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M1 9h14M2 5h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      </svg>
  },
  {
    icon:
      <svg className="w-6 h-6 text-gray-800 dark:text-saffron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
      </svg>
  }
]
const NavLinks = () => {
  return (
    <div className='flex flex-col gap-4 border-y-2 border-saffron py-2'>
      {
        NAV_LINKS.map((link, index) => (
          <div key={index} className=' text-saffron'>
            <Link href={link.href} className='flex flex-row gap-4'>
              {SVG_ICONS[index].icon}
              <p>{link.name}</p>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default NavLinks