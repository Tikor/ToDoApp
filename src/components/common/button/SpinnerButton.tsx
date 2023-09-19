import Spinner from "../spinner/Spinner"
import StandardButton from "./StandardButton"

interface SpinnerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{  
  name: string,
  isLoading: boolean,
}

export default function SpinnerButton({name, isLoading, ...props}: SpinnerButtonProps){

  return (
    <StandardButton {...props} disabled={isLoading}>
      {isLoading ? (
        <span className="p-1"><Spinner size="h-4 w-4" /></span>       
      ) : (
        <span>{name}</span>
      )}
    </StandardButton>
  )
}