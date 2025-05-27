import React from "react";
import BlogCard from "./BlogCard";
import AppSection from "./AppSection";
import AppHeader from "./AppHeader";
import {useBlog} from "../context/Context";

const AllBlogs = () => {
    const { blogs } = useBlog()
    return (
        <div id={"All-Blogs"}>
            <AppHeader title_1={"All"} title_2={"Blogs"} className={"sticky top-15 bg-white pt-10 pb-5"} />
            <AppSection className={"bg-white pt-0"} >
                <div className={"grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 "}>
                    {
                        blogs.map((blogs , index)=>
                            <BlogCard key={index} blog={blogs} />
                        )
                    }

                </div>
            </AppSection>
        </div>

    )
}

export default AllBlogs