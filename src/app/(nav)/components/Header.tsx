"use client"
import {UserButton, SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs"

import Link from "next/link"
import {usePathname} from "next/navigation"
import StandardButton from "../../../components/common/button/StandardButton"
import HeaderSpan from "./HeaderSpan"

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
          <Link href="/new" className="relative">
            <StandardButton>New</StandardButton>
            {pathname === '/new' && (<HeaderSpan />)}                        
          </Link>
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode='modal'>
            <StandardButton>Login</StandardButton>
          </SignInButton>
          <SignUpButton mode='modal'>
            <StandardButton>Sign-Up</StandardButton>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
)}