'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button, Card, CardBody, CardFooter, Input, Typography } from '@material-tailwind/react'
import Image from 'next/image'

const LoginPage = () => {

  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (res?.error) return setError(res.error as string)
    if (res?.ok) return router.push("/dashboard")
  }

  return (
    <div className='justify-center flex items-center h-screen'>
      {/* <Card className="mt-6 w-96 bg-blue-gray-50 "> */}
        <CardBody>
          <Image
            src='/logo8.png'
            alt='logo_login'
            width={350}
            height={200}
            priority
          />
          <div className='justify-center flex items-center w-full'>
            <form
              className='bg-neutral-950 w-full'
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="bg-red-500 text-white p-2">
                  {error}
                </div>
              )}
              <div className='mb-4 w-full'>
                <Input
                  color="black"
                  label="Email"
                  crossOrigin='4xl'
                  type="email"
                  name="email"
                />
              </div>

              <div className='mb-4'>
                <Input
                  color="black"
                  label="Password"
                  crossOrigin='4xl'
                  type="password"
                  name="password"
                  className='mb-2'
                />
              </div>

              <Button
                type='submit'
                className='bg-orange-300 px-4 py-2 w-full'
              >
                Ingresar
              </Button>
            </form>
          </div>
        </CardBody>
      {/* </Card> */}
    </div>
  )
}

export default LoginPage