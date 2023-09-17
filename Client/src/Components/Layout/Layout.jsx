import {Navbar} from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
export default function Layout () {
    return (
        <div className = "bg-[#e7fdea]">
            <Navbar/>
            <Outlet/>

        </div>
    )
}