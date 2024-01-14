'use client'
import React, { Fragment } from 'react'
import DesktopNavbar from './DesktopNavbar'
import { ExtendedSession } from '@/types/nextauthvars'
import { SessionProvider } from 'next-auth/react'
import MobileNavbar from './MobileNavbar'

const Navbar = ({ session }: { session: ExtendedSession }) => {
    return (
        <Fragment>
            <SessionProvider session={session}>
                <DesktopNavbar />
                <MobileNavbar />
            </SessionProvider>
        </Fragment>

    )
}

export default Navbar