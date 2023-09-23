"use server"
import { prisma } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

export async function toggleToDo(id: string, complete:boolean){
    "use server"  
    await prisma.todo.update({
      where: {
        id: id
      }, data: {
        complete: complete
      }
    })
}

export async function deleteToDo(id: string){
    "use server"
    await prisma.todo.delete({
      where:{
        id: id
      },
    })
    revalidatePath('/')
}