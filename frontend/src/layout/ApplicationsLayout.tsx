import {Navbar} from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";
export const ApplicationsLayout = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}
