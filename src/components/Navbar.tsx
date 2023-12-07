'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import UserAvatar from './Avatar'
import {
    Navbar as NavbarTW
} from "@material-tailwind/react";

const Navbar = () => {

    // const session = await getServerSession()
    const { data: session } = useSession()

    return (
        <NavbarTW className="mx-auto w-full py-2 lg:py-4 rounded-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className='flex justify-between items-center container mx-auto'>
                    {session && (
                        <Link rel="stylesheet" href="/dashboard">
                            <h1 className="font-bold text-xl ml-2">
                                {/* Next Auth */}
                                <UserAvatar fullName={session?.user?.fullname} />
                            </h1>
                        </Link>
                    )}


                    <ul className='flex gap-x-2'>
                        {
                            session ? (

                                <li className='px-3'>
                                    <div className='flex items-center gap-4 mt-2'>
                                        <a
                                            className='cursor-pointer'
                                            onClick={() => signOut()}
                                        >
                                            Cerrar sesión
                                        </a>
                                    </div>
                                </li>
                            ) : (
                                <>
                                    <li className='px-3 py-1'>
                                        <Link href="/login">
                                            Ingresar
                                        </Link>
                                    </li>

                                    <li className='px-3 py-1'>
                                        <Link href="/register">
                                            Registro
                                        </Link>
                                    </li>
                                </>
                            )
                        }

                    </ul>
                </div>
            </div>
        </NavbarTW>
    )
}

export default Navbar