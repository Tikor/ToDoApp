import {UserButton, SignedIn, SignedOut} from "@clerk/nextjs"

import Link from "next/link"
import StandardButton from "../../components/common/button/StandardButton"

export default function Header(){
  return(
    <nav className="flex justify-between items-center my-4">      
      <Link href="/" className="text-2xl text-slate-300 px-2 py-1 outline-none">ToDo App</Link>
      <div className="flex gap-2">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>    
            <Link href="/new"><StandardButton>New</StandardButton></Link>
        </SignedIn>
        <SignedOut>
            <Link href="/sign-in"><StandardButton>Login</StandardButton></Link>
            <Link href="/sign-up"><StandardButton>Sign-Up</StandardButton></Link>
        </SignedOut>
      </div>
    </nav>
)}