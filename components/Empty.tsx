import Image from 'next/image'
import React from 'react'

interface EmptyProps {
    label: string
}

const Empty: React.FC<EmptyProps> = ({label}) => {
  return (
    <div className='h-full p-16 flex flex-col items-center justify-center select-none'>
        <div className="relative h-72 w-72">
            <Image alt='Empty Image' src="/empty.png" fill />
        </div>
        <p className="text-muted-foreground text-center">
            {label}
        </p>
    </div>
  )
}

export default Empty