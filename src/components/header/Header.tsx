import Link from "next/link"
import { UserButton, auth } from "@clerk/nextjs"
import StandardButton from "../common/button/StandardButton"


export default function Header(){
  const { userId } : { userId: string | null } = auth()
    return(
        <header className="flex justify-between items-center my-4">
        
        <Link href="/sign-in" className="text-2xl text-slate-300 px-2 py-1 outline-none">ToDo App</Link>
        <div className="flex gap-2">

          {userId ? (
          <>
            <UserButton afterSignOutUrl="/"/>    
            <Link href="/new"><StandardButton>New</StandardButton></Link>
          </>
          ) : (<>
            <Link href="/sign-in"><StandardButton>Login</StandardButton></Link>
            <Link href="/sign-up"><StandardButton>Sign-Up</StandardButton></Link>
          </>)}          
        </div>
      </header>
    )
}