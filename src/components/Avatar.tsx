'use client'
import { Avatar, Typography } from '@material-tailwind/react'
import React from 'react'

interface Props{
    fullName: string
}

const UserAvatar = ({ fullName }: Props) => {
  return (
    <div className="flex items-center gap-4">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <div>
          <Typography variant="h6">{fullName}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
  )
}

export default UserAvatar