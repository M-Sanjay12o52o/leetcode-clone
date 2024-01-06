"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  )
}
