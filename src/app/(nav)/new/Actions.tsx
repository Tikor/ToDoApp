"use server"
import { prisma } from "@/db"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

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
    redirect("/")
  }