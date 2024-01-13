'use client'
import React from 'react'
import MobileMenubutton from './MobileMenubutton'
import ProfileNav from './ProfileNav'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import NavLinks from './NavLinks'

const NavbarMobile = ({ session }: {session: Session}) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <SessionProvider session={session}>


            <div className='fixed  md:hidden '>
                <MobileMenubutton handleOpen={handleOpen} open={open} />
                {
                    open && (

                        <div className='rounded-xl p-3 border border-saffron bg-drabbrown shadow-xl'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <h3 className='text-saffron text-2xl p-2 bg-eblack border-saffron border-2  rounded-full w-full text-center shadow-xl'>JLMS</h3>
                                <ProfileNav />
                                <NavLinks />
                            </div>
                        </div>
                    )
                }
            </div>
        </SessionProvider>
    )
}

export default NavbarMobile