'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter  } from 'next/navigation'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
 
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

      const res = await signIn('credentials', {
        email:    formData.get('email'),
        password: formData.get('password'),
        redirect: false
      })

      if(res?.error) return setError(res.error as string)
      if (res?.ok) return router.push("/dashboard")
  }

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
      <form
       className='bg-neutral-950 px-8 py-10 w-3/12'
       onSubmit={handleSubmit}
      >

        {error && (
          <div className="bg-red-500 text-white p-2">
            {error}
          </div>
        )}

        <h2 className='text-4xl font-bold mb-7'>LogIn</h2>

        <input
          type="email"
          placeholder="example@mail.com"
          name="email"
          className='bg-zinc-800 px-4 py-2 block mb-2 w-full'
        />
        <input
          type="password"
          placeholder="******"
          name="password"
          className='bg-zinc-800 px-4 py-2 block mb-2 w-full'
        />

        <button
          className='bg-indigo-500 px-4 py-2'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage