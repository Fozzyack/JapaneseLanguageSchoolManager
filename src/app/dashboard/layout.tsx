import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { ExtendedSession } from '@/types/nextauthvars'
import './layout.css'
import Navbar from '@/components/Dashboard/Navbar/Navbar'

const layout = async ({ children }:
    { children: React.ReactNode }
) => {


    const session = await getServerSession(options) as ExtendedSession
    if (!session?.user) {
        redirect('/api/auth/signin?callbackUrl=/dashboard')
    }



    return (
            <div className='bg-sblack min-h-screen'>
                <div className='flex flex-col min-h-screen md:p-0'>
                    <Navbar session={session}/>
                    <div className='pt-10 md:pt-0 bg-sblackl round-edges'>
                        {children}
                    </div>
                </div>

            </div>
    )
}

export default layout