interface StandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode
}

export default function StandardButton({...props}: StandardButtonProps){
    return(
        <div>    
            <button {...props} className="flex self-start text-center border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-white/10 focus-within:bg-white/10 outline-none">
                {props.children}
            </button>
        </div>
)}