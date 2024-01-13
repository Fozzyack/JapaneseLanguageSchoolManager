'use client'
import React, { Fragment } from 'react'
import DesktopNavbar from './DesktopNavbar'
import { ExtendedSession } from '@/types/nextauthvars'
import { SessionProvider } from 'next-auth/react'

const Navbar = ({ session }: { session: ExtendedSession }) => {
    return (
        <Fragment>
            <SessionProvider session={session}>
                <DesktopNavbar />
            </SessionProvider>
        </Fragment>

    )
}

export default Navbar