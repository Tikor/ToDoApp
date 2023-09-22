import { auth } from "@clerk/nextjs"


export default function Home(){
  const { userId } : { userId: string | null } = auth()
  return (<>
    <div className="container flex grow flex-col items-center min-h-full m-0 p-0">
      <div className="grow w-full">             
          <div>A simple ToDo application utilizing Next.js, Clerk & Neon Database. Login to see & add ToDo's</div>
      </div>
      <div className="my-2 w-full text-center text-white/80">Updated at: 2023-09-22</div>
    </div>
  </>)
}