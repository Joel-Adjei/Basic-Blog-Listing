import React from "react";
import AppButton from "./AppButton";
import {BiMessageError} from "react-icons/bi";

const ErrorBlog = () => {
    return (
        <div className={"size-full flex flex-col items-center justify-center"}>
            <BiMessageError size={50} className={"text-gray-500"} />
            <h4 className={"text-4xl font-[Montserrat] font-bold text-center lg:text-6xl"}>
                Invalid Blog
            </h4>
            <AppButton className={"w-20 mt-2 h-1 bg-blue-900"} title={"Go to Home"} to={"/"} />
        </div>
    )
}

export default ErrorBlog