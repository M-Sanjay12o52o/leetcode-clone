"use client"

import { authModalState } from '@/atoms/authModalAtom'
import AuthModal from '@/components/Modals/AuthModal'
import Navbar from '@/components/Navbar'
import { auth } from '@/firebase/firebase'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilValue } from 'recoil'

type Props = {}

const page = (props: Props) => {
    const router = useRouter();
    const authModal = useRecoilValue(authModalState)
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState<boolean>(true)

    useEffect(() => {
        if (user) router.push("/")
        if (!loading && !user) setPageLoading(false)
    }, [user, router, loading])

    if (pageLoading) return null;

    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none">
                    <Image src="/hero.png" alt="Hero img" width={600} height={600} />
                </div>
                {authModal.isOpen && <AuthModal />}
            </div>
        </div>
    )
}

export default page