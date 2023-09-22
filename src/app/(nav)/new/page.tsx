import Link from "next/link"
import { createToDo } from "@/components/Actions"
import SubmitButton from "@/components/common/button/SubmitButton"

export default function Page(){
return (
    <>
    <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>       
    </header>

    <form action={createToDo} className="flex gap-2 flex-col">
        <input
            type="text"
            name="title"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
            <Link
                href="/"
                className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-white/10 focus-within:bg-white/10 outline-none"
            >
                Cancel
            </Link>
            <SubmitButton name="Create" />
        </div>
    </form>    
    </>
)
}