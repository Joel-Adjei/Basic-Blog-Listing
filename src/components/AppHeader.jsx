import React from "react";

const AppHeader = ({title_1 , title_2 , className}) => {
    return (
        <div className={"flex flex-col items-center "+ className}>
            <h4 className={"text-4xl text-blue-900 font-[Montserrat] font-bold text-center"}>{title_1} <span className={"font-light text-blue-900"}>{title_2}</span></h4>
            <div className={"w-20 mt-4 h-[2px] bg-blue-900"}></div>
        </div>
    )
}

export default AppHeader