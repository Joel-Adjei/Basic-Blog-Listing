import React from "react";
import {useNavigate} from 'react-router'
import {MdOutlineMessage} from "react-icons/md";
import {BiCommentAdd} from "react-icons/bi";
import {BiSolidCommentAdd} from "react-icons/bi";

const AddBlogButton = ({className}) => {
    const navigator = useNavigate()
    return (
            <button onClick={()=> navigator("/add-blog")}
                    className={"fixed bottom-10 right-5 size-15 bg-blue-700 flex items-center justify-center rounded-full cursor-pointer text-gray-100 "+ className}>
                <BiCommentAdd size={27} />
            </button>

    )
}

export default AddBlogButton