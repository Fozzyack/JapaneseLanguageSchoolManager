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
            <main className='bg-sblack min-h-screen'>
                <div className='flex flex-col min-h-screen md:p-0'>
                    <Navbar session={session}/>
                    <div className='pt-16 bg-sblackl round-edges'>
                        {children}
                    </div>
                </div>
            </main>
    )
}

export default layout