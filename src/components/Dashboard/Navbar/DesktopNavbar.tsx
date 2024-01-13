'use client'
import React from 'react'
import Title from './Title'
import NavLinks from './NavLinks'
import LogoutButton from './LogoutButton'
import AdminLinks from './AdminLinks'
import { useSession } from 'next-auth/react'
import { ExtendedSession } from '@/types/nextauthvars'

const DesktopNavbar = () => {
    const { data: session } = useSession() as { data: ExtendedSession }

    return (
        <div className='fixed hidden md:flex md:flex-col w-[200px] py-6 justify-between h-screen items-center'>
            <Title />
            <div>
                <NavLinks />
                {
                    session?.user?.admin && <AdminLinks />
                }

            </div>

            <LogoutButton />

        </div>
    )
}

export default DesktopNavbar