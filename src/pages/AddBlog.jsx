import React, {useState} from "react";
import AppSection from "../components/AppSection";
import {Link, useNavigate} from "react-router";
import AppHeader from "../components/AppHeader";
import {useBlog} from "../context/Context";
import Navbar from "../components/Navbar";
import AppButton from "../components/AppButton";

const Input =({label, className, value , onChange, type , ...otherProps})=>{
    return(
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <input
                type="text"
                id="title"
                name="title"
                value={value}
                onChange={onChange}
                className={"w-full px-4 py-3 outline-0 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent "+className}
                placeholder="Enter your blog title"
                {...otherProps}
            />
        </div>
    )
}


const AddBlog = () => {
    const { blogs , setBlogs  , handleInputChange , formData , trim , setFormData} = useBlog()
    const [exist , setExist] = useState("hidden")
    const navigator = useNavigate()

    const handleAddBlog = (e) => {
        e.preventDefault();
        if (formData.title && formData.content) {
            const newBlog = {
                id: blogs.length + 1,
                title: trim(formData.title, 17),
                content: formData.content,
                summary: trim(formData.content , 45),
                date: formData.date,
            };
            
            setBlogs( (blogs)=> [ ...blogs ,newBlog]);
            navigator("/")
            
            setFormData({
                title: '',
                content: '',
                date: new Date().toISOString().split('T')[0]
            });
        }
    };

    return (
        <>
            <div onClick={()=> setExist("hidden")}
                 className={`size-full bg-blue-900/50 ${exist} shadow-lg items-center justify-center fixed top-0 right-0 z-90 duration-300 ease-in-ou`}>
                <div className={"bg-white px-7 font-[Montserrat] flex flex-col gap-3 items-center justify-center py-10 rounded-lg lg:w-100"}>
                    <p className={"text-2xl text-gray-700 font-bold"}>Do you want to end</p>
                    <div className={"flex gap-3"}>
                        <Link to={"/"}>
                            <button className={"bg-gray-100 rounded cursor-pointer text-blue-900 font-bold font- text-sm px-7 py-2 "}>
                                Yes
                            </button>
                        </Link>
                        <AppButton onClick={()=> setExist("hidden")} className={""} title={"No, Go Back"} />
                    </div>
                </div>
            </div>

            <AppSection>
                <AppHeader className={"mb-12"} title_1={"Add"} title_2={"New Blog"} />
                <form onSubmit={handleAddBlog} className="space-y-6 font-[Montserrat]">
                    <Input label={"Title *"}
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter your blog title"
                            required
                    />

                    <Input
                        label={"Date"}
                        type="date"
                        id="date"
                        name="date"
                        readOnly
                        value={formData.date}
                        onChange={handleInputChange}
                        className="focus:ring-0"
                    />

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                            Content *
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            rows="12"
                            className="w-full px-4 py-3 outline-0 border border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                            placeholder="Write your blog content here..."
                            required
                        />
                    </div>

                    <div className="flex fle gap-4">
                        <button
                            type="Submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-medium transition-colors"
                        >
                            Publish Post
                        </button>
                        <button
                            type="button"
                            onClick={() => setExist("flex")}
                            className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </AppSection>
        </>

    )
}

export default AddBlog