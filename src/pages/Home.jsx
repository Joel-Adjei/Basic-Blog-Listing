import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai";
import AppButton from "../components/AppButton";
import AllBlogs from "../components/AllBlogs";

const Home = () => {
    return (
        <div className={"h-full"}>
            {/*Navbar*/}
            <nav className={"sticky z-80 top-0 w-full flex items-center justify-between bg-white shadow-md py-2 px-7 md:px-12 lg:px-20"}>
                <h2 className={"text-md font-[Montserrat] font-bold text-blue-700"}>EnergyDevBlog</h2>
                <AppButton title={"Add Block"} to={"/add-blog"} />
            </nav>
            {/*Hero Section*/}
            <section className={"w-full h-100 bg-linear-to-bl from-blue-900 from-60% to-blue-700 flex flex-col items-center justify-center pt-10 px-10 md:px-10 lg:h-125 lg:px-24"}>
                <h2 className={"text-3xl sm:text-4xl font-[Montserrat] font-bold text-gray-100 md:text-6xl"}>EnergyDev Blog</h2>
                <AppButton className={"mt-10"} to={"/add-blog"} title={"Add Blog"} />
                <a href={"#All-Blogs"} className={"size-13 mt-15 rounded-full flex items-center justify-center bg-gray-400 animate-bounce"}>
                    <AiOutlineArrowDown size={25} color={"white"} />
                </a>
            </section>

            <div>
                <AllBlogs />
            </div>
        </div>
    )
}

export default Home