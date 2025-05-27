import React from "react";
import AppButton from "./AppButton";
import {BiMessageError} from "react-icons/bi";
import AppSection from "./AppSection";

const NotFound = () => {
    return (
        <div className={"w-full h-[100vh] flex flex-col items-center justify-center gap-5"}>
            <BiMessageError className={"text-gray-500 text-8xl lg:text-[200px]"} />
            <h4 className={"text-3xl sm:text-4xl font-[Montserrat] text-blue-900 font-bold text-center px-0 lg:text-6xl"}>
                Page Not Found
            </h4>
            <AppButton className={"mt-2  bg-blue-900"} title={"Go to Home"} to={"/"} />
        </div>
    )
}

export default NotFound