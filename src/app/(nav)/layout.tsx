import Header from "./components/Header"
export default function layout({children}: {children:React.ReactNode}) {
  return ( 
    <div className="flex grow flex-col overflow-hidden">
        <Header />
        {children}
    </div>
)}