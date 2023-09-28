import { auth } from '@clerk/nextjs'
import { ToDoItem } from "@/app/(nav)/components/ToDoItem"
import { getTodos } from "./Actions"

export default async function ToDoList(){
  const { userId } : { userId: string | null } = auth()
  
  let todos:any[] = []
  if(userId){
    todos = await getTodos(userId)
  }
  
  return(    
    <ul className="flex flex-col w-full px-4 gap-y-2 mt-4">
      {todos.length === 0 ? <div className="text-center">Welcome 🎉 Click on the New button to get started</div> :(
        <>
        {todos.map(todo => (
          <ToDoItem key={todo.id} {...todo}/>
        ))}
        </>
      )}      
    </ul>
)}