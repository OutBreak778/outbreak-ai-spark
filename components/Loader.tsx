import { cn } from '@/lib/utils'
import { Roboto, Roboto_Mono } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const robot = Roboto_Mono({
    weight: "500",
    subsets: ["latin"],
  });

const Loader = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-y-4'>
        <div className="w-10 h-10 relative animate-spin">
            <Image alt='image' src="/circle.svg" fill />
        </div>
        <div className="text-sm text-muted-foreground flex">
            <p className={cn('text-violet-600 underline underline-offset-2',robot.className)}>OUTBREAK AI</p><p>&nbsp;is Thinking...</p>
        </div>
    </div>
  )
}

export default Loader