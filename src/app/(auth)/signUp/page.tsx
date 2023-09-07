import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="container flex mt-5 justify-center">
      <SignUp />
    </div>
  )  
}