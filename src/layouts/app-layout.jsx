import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const AppLayout=()=>{
    return (
        <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container">
        <Header></Header>
        <Outlet></Outlet>
        </main>
        <div className="p-10 text-center bg-slate-600 mt-10"> Made By Karan H Datwani</div>
        </div>
    )
}
export default AppLayout