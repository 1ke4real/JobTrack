import {Navbar} from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";
export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <Outlet/>
            </div>
        </div>
    )
}
