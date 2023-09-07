import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
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
        <body className={` ${inter.className} flex flex-col text-neutral-200 container mx-auto m-0 p-0 min-h-screen`}>
          <Header />
          {children}
          <Image
            src={mountains}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            alt="Mountains"
            className="object-cover -z-50 dark:grayscale"
          />
        </body>
      </html>
    </ClerkProvider>
  )
}
