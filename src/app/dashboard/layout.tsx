import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import NavbarDesktop from '@/components/Dashboard/NavbarDesktop'
import NavbarMobile from '@/components/Dashboard/NavbarMobile'

const layout = async ({ children }:
    { children: React.ReactNode }
) => {


    const session = await getServerSession(options)
    if (!session?.user) {
        redirect('/api/auth/signin?callbackUrl=/dashboard')
    }



    return (
            <div className='bg-eblack min-h-screen'>
                <div className='md:grid md:grid-cols-12 flex flex-col min-h-screen p-4'>
                    <div className='md:col-span-5'>
                        <NavbarDesktop session={session}/>
                        <NavbarMobile session={session}/>
                    </div>
                    <div className='md:col-span-7 mt-10 md:mt-0'>
                        {children}
                    </div>
                </div>

            </div>
    )
}

export default layout