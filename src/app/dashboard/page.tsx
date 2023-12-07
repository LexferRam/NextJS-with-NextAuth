'use client'

import { Button } from '@material-tailwind/react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export const DashboardPage = () => {

    const { data: session, status } = useSession()

    return (
        <div className='flex flex-col items-center h-screen mt-2'>
            <h2>Profile</h2>

            <pre className='bg-zinc-800 p-8 m-3'>
                {
                    JSON.stringify({session,status}, null, 2)
                }
            </pre>

        </div>
    )
}

export default DashboardPage
