import { auth } from "@clerk/nextjs"
import ToDoList from "@/components/ToDoList"

export default function List() {
  const { userId } : { userId: string | null } = auth()
  return (<>
    <div className="container flex grow flex-col items-center min-h-full m-0 p-0">
      <div className="grow w-full">
        {userId ? (
          <ToDoList />
        ) : (              
          <div></div>
        ) }
      </div>      
    </div>
  </>)
}