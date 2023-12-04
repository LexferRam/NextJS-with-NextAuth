'use client'

import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'

const RegisterPage = () => {

  const router = useRouter()
  const [error, setError] = useState()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const signupResponse = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('name'),
      })

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password: formData.get('password'),
        redirect: false
      })

      if (res?.ok) return router.push("/dashboard")

    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
      }
    }
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

        <h2 className='text-4xl font-bold mb-7'>Sign Up</h2>

        <input
          type="text"
          placeholder="John Doe"
          name="name"
          className='bg-zinc-800 px-4 py-2 block mb-2 w-full'
        />
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
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage