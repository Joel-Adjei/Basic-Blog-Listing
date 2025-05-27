import React, {useEffect, useState} from "react";
import AppSection from "../components/AppSection";
import {Link} from "react-router";
import AppHeader from "../components/AppHeader";
import {useBlog} from "../context/Context";
import AppButton from "../components/AppButton";
import {AiFillCheckCircle} from "react-icons/ai";

const Input =({label, className, value , onChange, type , ...otherProps})=>{
    return(
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={"w-full px-4 py-3 outline-0 border border-blue-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent "+className}
                placeholder="Enter your blog title"
                {...otherProps}
            />
        </div>
    )
}

const FeedBack = ()=>{
    return(
        <div className={`size-full bg-blue-900/50 flex items-center justify-center fixed top-0 right-0 z-90 duration-300 ease-in-ou`}>
            <div className={"bg-white px-7 shadow-lg  font-[Montserrat] flex flex-col gap-5 items-center justify-center py-10 rounded-lg lg:w-100"}>
                <AiFillCheckCircle className={"text-green-500 text-8xl md:text-[160px]"} />
                <p className={"text-2xl text-gray-700 font-bold"}>Blog Add Successful</p>
                <div>
                    <AppButton to={"/"} title={"Okay"} />
                </div>
            </div>
        </div>
    )

}


const AddBlog = () => {
    const { blogs , setBlogs  , handleInputChange , formData , trim , setFormData} = useBlog()
    const [exist , setExist] = useState("hidden")
    const [displayFeed , setDisplayFeed] = useState(false)

    useEffect(()=> setDisplayFeed(false), [])

    const handleAddBlog = (e) => {
        e.preventDefault();
        if (formData.title && formData.content) {
            const newBlog = {
                id: blogs.length + 1,
                title: formData.title,
                content: formData.content,
                summary: trim(formData.content , 45),
                date: formData.date,
            };
            
            setBlogs( (blogs)=> [ ...blogs ,newBlog]);
            setDisplayFeed(true)
            setFormData({
                title: '',
                content: '',
                date: new Date().toISOString().split('T')[0]
            });
        }
    };

    return (
        <>
            {/*Show if successful*/}
            {displayFeed && <FeedBack />}


            <div onClick={()=> setExist("hidden")}
                 className={`size-full bg-blue-900/50 ${exist} items-center justify-center fixed top-0 right-0 z-90 duration-300 ease-in-ou`}>
                <div className={"bg-white px-7 shadow-lg  font-[Montserrat] flex flex-col gap-3 items-center justify-center py-10 rounded-lg lg:w-100"}>
                    <p className={"text-2xl text-gray-700 font-bold"}>Do you want to Exist</p>
                    <div className={"flex gap-3"}>
                        <Link to={"/"}>
                            <button className={"bg-gray-100 border border-gray-300 rounded cursor-pointer text-gray-600 font-bold font- text-sm px-10 py-3 "}>
                                Yes
                            </button>
                        </Link>
                        <AppButton onClick={()=> setExist("hidden")} title={"No, Go Back"} />
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
                        value={formData.date}
                        onChange={handleInputChange}
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
                            className="w-full px-4 py-3 outline-0 border border-blue-400 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                            placeholder="Write your blog content here..."
                            required
                        />
                    </div>

                    <div className="flex fle gap-4">
                        <button
                            type="Submit"
                            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-medium transition-colors"
                        >
                            Publish Post
                        </button>
                        <button
                            type="button"
                            onClick={() => setExist("flex")}
                            className="cursor-pointer border border-gray-500 bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2 rounded-lg font-medium transition-colors"
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