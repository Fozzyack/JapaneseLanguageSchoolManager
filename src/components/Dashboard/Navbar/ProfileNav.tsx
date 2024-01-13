import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const ProfileNav = () => {
    const { data: session } = useSession()
    return (
        <div className='p-3'>
            <div className='flex flex-col items-center bg-black p-3 rounded-xl'>
                {
                    session?.user?.image &&
                    <Image src={session.user.image} alt='Profile Picture' width={100} height={100} className='rounded-full border-2 border-saffron' />
                }
                {
                    session?.user?.name ?
                        <p className='text-base text-center text-saffron'>{session.user.name}</p> :

                        session?.user?.email &&
                        <p className='text-base text-center text-saffron'>{session.user.email}</p>

                }
            </div>
        </div>

    )
}

export default ProfileNav