import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <Link href={"/"} className='flex items-center justify-center h-20'>
                <img src={"/logo.png"} alt='LeetClone' className='h-full w-auto' />
            </Link>
            <div className="flex items-center">
                <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent'>sign in</button>
            </div>
        </div>
    )
}

export default Navbar