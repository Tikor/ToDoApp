"use client"
import {UserButton, SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs"

import Link from "next/link"
import {usePathname} from "next/navigation"
import { Button } from "@/components/ui/button"
import HeaderSpan from "./HeaderSpan"
import { ModeToggle } from "./ModeToggle"

export default function Header(){
const pathname = usePathname()

  return(
    <nav className="flex justify-between items-center my-4">
      <div className="relative">
        <Link href="/" className="text-2xl text-slate-300 px-2 py-1 outline-none select-none">ToDo App</Link>
        {pathname === '/' && (<HeaderSpan />)}                        
      </div>      
      <div className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
          <div className="relative">
            <Button variant="light" asChild><Link href="/new">New</Link></Button>
            {/* <StandardButton>New</StandardButton> */}
            {pathname === '/new' && (<HeaderSpan />)}                        
          </div>
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode='modal'>
            <Button variant="light">Login</Button>            
          </SignInButton>
          <SignUpButton mode='modal'>
            <Button variant="light">Sign-Up</Button>            
          </SignUpButton>
        </SignedOut> 
        <div className="mr-1"><ModeToggle /></div>
      </div>
    </nav>
)}