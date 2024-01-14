import Balance from '@/components/Dashboard/Dashboard/Balance'
import Changelog from '@/components/Dashboard/Dashboard/Changelog'
import ProfileDashboard from '@/components/Dashboard/Dashboard/ProfileDashboard'
import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { ExtendedSession } from '@/types/nextauthvars'

const Dashboard = async  () => {
  const session = await getServerSession(options) as ExtendedSession
  return (
    <section>
      <div className='w-full flex flex-row justify-between mb-5 bg-sblack rounded-xl py-2 px-3 md:px-8 items-center border border-saffron shadow-xl'>
        <Balance />
        <ProfileDashboard session={session}/>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap'>
        <Changelog />
      </div>

    </section>
  )
}

export default Dashboard