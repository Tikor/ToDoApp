interface SpinnerProps{  
    size?: string,
}

export default function Spinner({size = "h-12 w-12"}:SpinnerProps){
    return(
    <div className="flex justify-center items-center">
        <div className={`animate-spin rounded-full ${size} border-t-4 border-b-4 border-white`}></div>
    </div>
)}