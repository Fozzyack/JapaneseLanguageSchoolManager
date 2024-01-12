'use client'
import { navlink } from '@/types/landing'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Navlinks = ({ link }: { link: navlink }) => {
    return (
        <Fragment>
            <Link href={link.url}>
                <div className='group relative'>
                    <p className='border-b-2 border-transparent hover:border-saffron transition duration-150'>{link.name}</p>
                </div>
            </Link>
        </Fragment>
    )
}

export default Navlinks