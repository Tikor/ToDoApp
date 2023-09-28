import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from './components/ThemeProvider'

import type { Metadata } from 'next'
import Image from 'next/image'
import mountains from '../../public/mountains.jpg'

export const metadata: Metadata = {
  title: 'ToDo App',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (    
  <html lang="en">
    <ClerkProvider>
      <body className={` ${inter.className}`}>
        <ThemeProvider>
          <div className="relative flex flex-col text-neutral-200  m-0 p-0 min-h-screen w-full overflow-hidden">
            <div className="container mx-auto flex grow flex-col px-4">{children}</div>
            <Image
              src={mountains}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              alt="Mountains"
              className="object-cover -z-50 dark:grayscale"
            />
          </div>
        </ThemeProvider>
      </body>
    </ClerkProvider>
  </html>    
)}