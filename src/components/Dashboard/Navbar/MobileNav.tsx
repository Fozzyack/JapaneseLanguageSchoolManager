'use client'
import React from 'react'
import Title from './Title'
import NavLinks from './NavLinks'
import AdminLinks from './AdminLinks'
import { useSession } from 'next-auth/react'
import { ExtendedSession } from '@/types/nextauthvars'
import LogoutButton from './LogoutButton'

const MobileNav = () => {
  const { data: session } = useSession() as { data: ExtendedSession }
  return (
    <nav className='w-[200px] h-[80vh] flex flex-col items-center py-3 justify-between rounded-xl bg-sblack mt-3 border-2 border-saffron'>
      <Title />
      <div>
        <NavLinks />
        {
          session?.user?.role && session?.user?.role > 1 && <AdminLinks />
        }

      </div>
      <LogoutButton />
    </nav>
  )
}

export default MobileNav