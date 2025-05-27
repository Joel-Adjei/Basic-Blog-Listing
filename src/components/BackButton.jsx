import React from "react";
import {useNavigate} from 'react-router'
import { HiArrowLeft} from "react-icons/hi";

const BackButton = ({className}) => {
    const navigator = useNavigate()
    return (
            <button onClick={()=> navigator(-1)}
                    className={"bg-gray-200 rounded-full flex items-center gap-2 cursor-pointer text-gray-700 text-sm px-7 py-2 "+ className}>
                <HiArrowLeft size={15} />
                Back
            </button>

    )
}

export default BackButton