"use server"
import { prisma } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs";

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
    revalidatePath('/list')
}

export async function createToDo(data: FormData){
  const { userId } : { userId: string | null } = auth()
  const title = data.get("title")?.valueOf()

  if(typeof title !== "string" || title.length === 0){
      throw new Error("Invalid Title")
  }
  if(!userId){
      throw new Error("Unauthorized")
  }
  await prisma.todo.create({data: {title, complete: false, createdBy: userId as string}})
  redirect("/list")
}