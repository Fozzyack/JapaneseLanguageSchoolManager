import Image from 'next/image'
import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-row  items-center justify-center w-[150px] border border-saffron shadow-xl  mx-2 bg-drabbrown rounded-xl'>
        <Image src='/LogoNBG.png' alt='Logo' width={50} height={50} />
        <h1 className='text-3xl text-center  text-saffron'>文珠</h1>
    </div>
  )
}

export default Title