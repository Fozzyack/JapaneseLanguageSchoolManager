'use client'
import { ExtendedSession } from '@/types/nextauthvars'
import React from 'react'

const ProfileDashboard = ({ session }: { session: ExtendedSession }) => {
    return (
        <div className='flex flex-row gap-2 text-saffron items-center'>
            {
                session.user?.name ?
                    <div>
                        <span>{session.user.name}</span>
                    </div>
                    :
                    <div>
                        <span>{session.user?.email}</span>
                    </div>
            }
            {
                session.user?.image && <img src={session.user.image} alt="profile" className='w-10 h-10 rounded-full border-2 border-saffron' />
            }

        </div>
    )
}

export default ProfileDashboard