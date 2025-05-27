import React from "react";
import AppHeader from "../components/AppHeader";
import BlogCard from "../components/BlogCard";
import AppSection from "../components/AppSection";
import AddBlogButton from "../components/AddBlogButton";
import {useBlog} from "../context/Context";
import Navbar from "../components/Navbar";

const AllBlogs = () => {
    const { blogs } = useBlog()
    return (
        <>
            <Navbar />
            <AddBlogButton />
            <AppSection className={"pt-23"}>

                <AppHeader title_1={"All"} title_2={"Blogs"} className={"mb-10"} />

                <div className={"grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 "}>
                    {
                        blogs.map((blogs , index)=>
                            <BlogCard key={index} blog={blogs} />
                        )
                    }

                </div>
            </AppSection>
        </>

    )
}

export default AllBlogs