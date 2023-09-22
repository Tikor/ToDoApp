import Header from "./Header"
export default function layout({children}: {children:React.ReactNode}) {
  return ( 
    <div className="flex grow flex-col">
        <Header />
        {children}
    </div>
)}