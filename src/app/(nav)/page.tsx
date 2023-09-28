import { auth } from "@clerk/nextjs"
import ToDoList from "./components/ToDoList"

export default function Home(){
  const { userId } : { userId: string | null } = auth()
  return (
  <div className="flex grow flex-col">
    <div className="container flex grow flex-col items-center min-h-full m-0 p-0">
      <div className="grow w-full">
        {userId ? (
          <ToDoList />
        ) : (              
          <div>A simple ToDo application utilizing Next.js, Clerk & Neon Database. Login to see & add ToDo's</div>
        ) }
      </div>
      <div className="my-2 w-full text-center text-white/80">Updated at: 2023-09-28</div>      
    </div>
  </div>
)}