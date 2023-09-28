import Link from "next/link"
import { createToDo } from "./Actions"
import SubmitButton from "@/components/common/button/SubmitButton"
import { Button } from "@/components/ui/button"

export default function Page(){
return (
    <form action={createToDo} className="flex gap-2 flex-col">
        <span className="text-slate-300">New to-do:</span>
        <input
            autoFocus
            type="text"
            name="title"
            className="border bg-white/40 text-white border-none rounded-lg px-2 py-2 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
            <Button variant="light" asChild><Link href="/">Cancel</Link></Button>
            <SubmitButton name="Create" />
        </div>
    </form>
)}