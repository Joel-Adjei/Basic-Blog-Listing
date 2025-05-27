import React from "react";
import BlogCard from "./BlogCard";
import AppSection from "./AppSection";
import AppHeader from "./AppHeader";
import {useBlog} from "../context/Context";

const LatestBlog = () => {
    const { blogs } = useBlog()
    return (
        <AppSection className={"bg-white"}>
            <div id={"Latest-Blog"}>
                <AppHeader title_1={"Latest"} title_2={"Blog"} className={"mb-15"} />
                <div className={"grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 "}>
                    {
                        blogs.map((blogs , index)=>
                            <BlogCard key={index} blog={blogs} />
                        )
                    }

                </div>
            </div>

        </AppSection>
    )
}

export default LatestBlog