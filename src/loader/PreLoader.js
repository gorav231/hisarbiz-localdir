import Image from 'next/image'
import React from 'react'

const PreLoader = () => {
    return (
        <div className='bg-white left-0 right-0 fixed h-[100vh] w-[100vw] z-40 flex justify-center items-center '>
            <div className='animate-loadershake'>
            <Image src="/images/pre-loader/loader.gif" width={150} height={150} alt="loader"></Image>
            </div>
        </div>
    )
}

export default PreLoader;