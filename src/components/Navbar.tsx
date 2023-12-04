import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {

    const session = await getServerSession()

    return (
        <nav className='bg-zinc-900 p-4'>
            <div className='flex justify-between container mx-auto'>
                <Link rel="stylesheet" href="/">
                    <h1 className="font-bold text-xl">
                        Next Auth
                    </h1>
                </Link>

                <ul className='flex gap-x-2'>
                    {
                        session ? (

                            <li className='px-3 py-1'>
                                <Link href="/dashboard">
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li className='px-3 py-1'>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>

                                <li className='px-3 py-1'>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className='px-3 py-1'>
                                    <Link href="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar