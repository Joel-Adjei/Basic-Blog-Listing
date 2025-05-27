import React from "react";
import AppSection from "../components/AppSection";
import {AiOutlineArrowDown} from "react-icons/ai";
import LatestBlog from "../components/LatestBlog";
import AppButton from "../components/AppButton";

const Home = () => {
    return (
        <div className={"h-full"}>
            {/*Navbar*/}
            <nav className={"sticky z-80 top-0 w-full flex items-center justify-between bg-white py-3 px-7 md:px-12 lg:px-20"}>
                <h2 className={"text-md font-[Montserrat] font-bold text-blue-700"}>EnergyDevBlog</h2>
                <AppButton title={"Add Block"} to={"/add-blog"} />
            </nav>
            {/*Hero Section*/}
            <section className={"w-full h-100 bg-blue-900 flex flex-col items-center justify-center pt-10 px-10 md:px-10 lg:h-125 lg:px-24"}>
                <h2 className={"text-4xl font-[Montserrat] font-bold text-gray-100 md:text-6xl"}>EnergyDevBlog</h2>
                <AppButton className={"mt-10 "} to={"/all-blogs"} title={"View Blogs"} />
                <a href={"#Latest-Blog"} className={"size-13 mt-15 rounded-full flex items-center justify-center bg-gray-400 animate-bounce"}>
                    <AiOutlineArrowDown size={25} color={"white"} />
                </a>
            </section>

            <div>
                <LatestBlog />
            </div>
        </div>
    )
}

export default Home