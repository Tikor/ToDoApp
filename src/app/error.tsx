'use client'
 import { useEffect } from 'react'
 import StandardButton from '@/components/common/button/StandardButton'
 
export default function Error({error,reset}: {error: Error; reset: () => void}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="m-4 gap-1 w-full flex flex-col items-center">
      <h2 className="px-4 py-1 m-2 rounded-full bg-red-600/50 text-red-100">Something went wrong</h2>
      <StandardButton onClick={() => reset()}>Try again</StandardButton>        
    </div>
  )
}