import React from "react";
import {Link} from 'react-router'
import {CgUser , CgCalendar} from "react-icons/cg";

const BlogCard = ({blog , key }) => {
    return (
        <Link to={`/all-blogs/${blog.id}`} className={"bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg "}>
            <div className={"p-6"}>
                <h3 className="text-2xl font-[Montserrat] font-semibold text-blue-900 mb-3 leading-7 cursor-pointer hover:text-blue-600 transition-colors">
                    {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{blog.summary}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <CgUser size={17} />
                        <p>{blog.author}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CgCalendar size={17} />
                        <p>{blog.date}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default BlogCard