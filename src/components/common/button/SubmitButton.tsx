'use client' 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import SpinnerButton from './SpinnerButton'

interface SubmitButtonProps{
    name:string
}

export default function SubmitButton({name}:SubmitButtonProps){
    const { pending } = useFormStatus()
    return <SpinnerButton name={name} isLoading={pending} type="submit" />
}