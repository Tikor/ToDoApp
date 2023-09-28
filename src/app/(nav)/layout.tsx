import Header from "./components/Header"

export default function layout({children}: {children:React.ReactNode}) {
  return (     
    <div className="flex grow flex-col overflow-hidden px-1">      
      <Header />
        {children}
    </div>
)}