import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Home - Suyash Patil',
  description: 'This blog will serve as a home for all my thoughts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(29,30,32)]`}>
        <Navbar />
        <MaxWidthWrapper>
        {children}
        </MaxWidthWrapper>
        <Analytics />
      </body>
    </html>
  )
}
