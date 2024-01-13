'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { Fragment } from 'react'

const ProfileNav = () => {
    const { data: session } = useSession()
    return (
        <Fragment>
            {
                session?.user?.image && <Image src={session?.user?.image} alt='ProfilePicture' width={100} height={100} className='rounded-full border-2 border-saffron shadow-xl' />
            }
            <p className='text-saffron text-xl'>
                {session?.user?.name}
            </p>

        </Fragment>
    )
}

export default ProfileNav