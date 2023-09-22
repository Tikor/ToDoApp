"use client"

import { XCircle } from 'lucide-react'

import { useTransition, useState } from "react"
import { toggleToDo } from "./Actions"
import { deleteToDo } from "./Actions"

interface ToDoItemProps {
    id: string
    title: string
    complete: boolean
}

export function ToDoItem({id, title, complete}: ToDoItemProps){
    const [isChecked, setIsChecked] = useState<boolean>(complete)
    const [isDeleting, startDeleteTransition] = useTransition()
    const [isBeingChecked, startCheckingTransition] = useTransition()

    const handleCheck = (): void=>{
        startCheckingTransition(()=>{
            setIsChecked(!isChecked)
            toggleToDo(id, !isChecked)
        })
    }

    return(
        <li className="flex w-full gap-1 justify-start px-2 py-1 border
         border-neutral-400 dark:border-neutral-300 rounded-lg outline-none
         bg-white shadow-lg dark:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-500
         text-slate-500 dark:text-slate-400 select-none">
            {isDeleting ? <span>Deletion in progress...</span>:(<>            
            
            <button onClick={e => handleCheck()}
            className="flex grow justify-start cursor-pointer gap-1 items-center">
                {isChecked ? "☑" : "☐"}
                <span className={`${isChecked ? "line-through" : ""} ml-1 p-0 `}>{title}</span>
            </button>

            <div className="flex">
               <button onClick={() => startDeleteTransition(()=>deleteToDo(id))}>
                <XCircle className="hover:text-red-800 text-neutral-400" />
               </button>
            </div>
            </>)}       
        </li>
)}