'use client'

import axios, { AxiosError } from 'axios'
import React, { FormEvent, FormEventHandler, useState } from 'react'

const RegisterPage = () => {

  const [error, setError] = useState()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const res = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('name'),
      })

      console.log(res)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError){
        setError(error.response?.data.message)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {error && (
          <div className="bg-red-500 text-white p-2">
            {error}
          </div>
        )}

        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="John Doe"
          name="name"
          className='bg-zinc-800 px-4 py-2 block mb-2'
        />
        <input
          type="email"
          placeholder="example@mail.com"
          name="email"
          className='bg-zinc-800 px-4 py-2 block mb-2'
        />
        <input
          type="password"
          placeholder="******"
          name="password"
          className='bg-zinc-800 px-4 py-2 block mb-2'
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