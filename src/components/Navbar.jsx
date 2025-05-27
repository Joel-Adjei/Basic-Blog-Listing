import React from "react";
import {Link} from 'react-router'
import BackButton from "./BackButton";

const Navbar = () => {
    return (
        <nav className={"fixed z-80 top-0 w-full flex items-center border-b border-blue-800 justify-between bg-white py-3 px-7 md:px-12 lg:px-20"}>
            <BackButton />

            <Link to={"/"} >
                <h2 className={"text-md font-[Montserrat] font-bold z-80 text-blue-700"}>EnergyDevBlog</h2>
            </Link>
        </nav>

    )
}

export default Navbar