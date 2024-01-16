import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

const BotAvatar = () => {
  return (
        <Avatar className="w-8 h-8">
            <AvatarImage src="/circle.svg" className="p-1" />
        </Avatar>
  )
}

export default BotAvatar