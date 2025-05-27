import React  from "react";
import { useParams} from "react-router";
import {CgCalendar} from "react-icons/cg";
import AppSection from "../components/AppSection";
import Navbar from "../components/Navbar";
import { useBlog} from "../context/Context";
import AddBlogButton from "../components/AddBlogButton";

const BlogDetail = () => {
    const { blogs } =useBlog()
    const { id } = useParams()

    const details = blogs.find(blog => blog.id === Number(id))

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <>
            <Navbar />
            <AddBlogButton />
            <AppSection className={"pt-23"}>
                <div>
                    <article className="bg-white overflow-hidden ">
                        <div className="p-8">
                            <h1 className="text-4xl font-bold text-blue-900 mb-4">{details .title}</h1>
                            <div className=" text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
                                <div className="flex items-center gap-1">
                                    <CgCalendar size={16} />
                                    <span>{formatDate(details.date)}</span>
                                </div>
                            </div>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                                    {details.content}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

            </AppSection>
        </>


    )
}

export default BlogDetail
