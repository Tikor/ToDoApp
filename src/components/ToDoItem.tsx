"use client"
import { useTransition } from "react"
import { toggleToDo } from "./Actions"
import { deleteToDo } from "./Actions"

interface ToDoItemProps {
    id: string
    title: string
    complete: boolean
}

export function ToDoItem({id, title, complete}: ToDoItemProps){
    const [isPending, startTransition] = useTransition()

    return <li className="flex gap-1 items-center">
        <input 
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => startTransition(()=>toggleToDo(id, e.target.checked))}
        />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        <div className="flex grow justify-end">
            <button onClick={() => startTransition(()=>deleteToDo(id))}>🗑️</button>
        </div>        
    </li>
}