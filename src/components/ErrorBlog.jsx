import React from "react";
import AppButton from "./AppButton";
import {BiMessageError} from "react-icons/bi";

const ErrorBlog = () => {
    return (
        <div className={"w-full h-[100vh] flex flex-col items-center justify-center gap-5"}>
            <BiMessageError className={"text-gray-500 text-4xl md:text-8xl lg:text-[200px]"} />
            <h4 className={"text-4xl font-[Montserrat] tex-center text-blue-900 font-bold text-center lg:text-6xl"}>
                Invalid Blog
            </h4>
            <AppButton className={"mt-2 bg-blue-900"} title={"Go to Home"} to={"/"} />
        </div>
    )
}

export default ErrorBlog