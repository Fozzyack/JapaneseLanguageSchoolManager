'use client'
import { ExtendedSession } from '@/types/nextauthvars'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ADMIN_NUMS = {
    STUDENT: 1,
    TEACHER: 2,
    ADMIN: 3
}
export const NAV_LINKS_ADMIN = [
    {
        name: 'Manage Students',
        href: '/dashboard/manage-students',
        role: ADMIN_NUMS.ADMIN
    }

]

const icons = (id: number, active: boolean) => {
    switch (id) {
        case 0:
            return (
                <svg className={`w-5 h-5 text-gray-800 ${active ? 'dark:text-saffron' : 'dark : text-slate-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
            )
    }
}

const AdminLinks = () => {
    const pathname = usePathname()
    const { data: session } = useSession() as { data: ExtendedSession }
    return (
        <div className='border-t border-slate-500'>
            {
                NAV_LINKS_ADMIN.map((link, index) => {
                    if (session.user?.role && link.role <= session.user.role) {
                        return (
                            <div key={index} className='flex w-full justify-center'>

                                <Link href={link.href} key={index}>
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        className='flex flex-row gap-5 py-4 px-6 items-center'>
                                        {icons(index, pathname === link.href)}
                                        <p className={`text-gray-800 ${pathname === link.href ? 'text-saffron' : 'text-slate-500'} text-[1rem]`}>{link.name}</p>
                                    </motion.div>
                                </Link>
                            </div>

                        )
                    }
                })
            }
        </div>
    )
}

export default AdminLinks