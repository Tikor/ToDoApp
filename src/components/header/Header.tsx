import Link from "next/link"
import { UserButton, auth } from "@clerk/nextjs"


export default function Header(){
  const { userId } : { userId: string | null } = auth()
    return(
        <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl">ToDo App</h1>
        <div className="flex gap-2">

          {userId ? (
          <>
            <UserButton afterSignOutUrl="/"/>    
            <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-white/10 focus-within:bg-white/10 outline-none">New</Link>
          </>
          ) : (<>
            <Link href="/signIn" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-white/10 focus-within:bg-white/10 outline-none">Login</Link>
            <Link href="/signUp" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-white/10 focus-within:bg-white/10 outline-none">Sign-Up</Link>
          </>)}          
        </div>
      </header>
    )
}