import Spinner from "../spinner/Spinner"
import { Button } from "@/components/ui/button"

interface SpinnerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{  
  name: string,
  isLoading: boolean,
}

export default function SpinnerButton({name, isLoading, ...props}: SpinnerButtonProps){
  return (
    <Button {...props} disabled={isLoading} variant="light">
      {isLoading ? (
        <span className="p-1"><Spinner size="h-4 w-4" /></span>       
      ) : (
        <span>{name}</span>
      )}
    </Button>
  )
}