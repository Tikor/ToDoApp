import './globals.css'
import '@radix-ui/themes/styles.css'

import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import Image from 'next/image'
import mountains from '../../public/mountains.jpg'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={` ${inter.className}`}>
            <Theme>        
              <div className="relative flex flex-col text-neutral-200  m-0 p-0 min-h-screen w-full overflow-hidden">
                <div className="container mx-auto flex grow flex-col px-4">
                <Header />
                {children}
                </div>
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
            </Theme>        
          </body>
      </html>
    </ClerkProvider>    
  )
}
