'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export const DashboardPage = () => {

    const { data: session, status } = useSession()

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2>Profile</h2>

            <pre className='bg-zinc-800 p-8 m-3'>
                {
                    JSON.stringify({session,status}, null, 2)
                }
            </pre>

            <button
                className='py-2 px-4 bg-blue-500 rounded-lg'
                onClick={() => signOut()}
            >
                logout
            </button>
        </div>
    )
}

export default DashboardPage
