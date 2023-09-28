"use server"
import { prisma } from "@/db"
import { revalidatePath } from "next/cache"

export async function toggleToDo(id: string, complete:boolean){
    await prisma.todo.update({
      where: {
        id: id
      }, data: {
        complete: complete
      }
    })
}

export async function deleteToDo(id: string){
    await prisma.todo.delete({
      where:{
        id: id
      },
    })
    revalidatePath('/')
}

export async function getTodos(userId:string|null){
  const userIdString:string = userId ?? ""
  return prisma.todo.findMany({
    where:{
      createdBy: userIdString,
    },
    orderBy:{
      createdAt: 'desc'
    }
  })
}