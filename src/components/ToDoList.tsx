import {prisma} from "@/db"
import { auth } from '@clerk/nextjs'
import { ToDoItem } from "@/components/ToDoItem"

function getTodos(userId:string|null){
    const userIdString:string = userId ?? ""
    return prisma.todo.findMany({
      where:{
        createdBy: userIdString,
      },
    })
}

export default async function ToDoList(){
  const { userId } : { userId: string | null } = auth()
  
  let todos:any[] = []
  if(userId){
    todos = await getTodos(userId)
  }
  
  return(
    <ul className="pl-4">
      {todos.map(todo => (
        <ToDoItem key={todo.id} {...todo}/>
      ))}
    </ul>
  )
}