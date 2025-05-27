import React from "react";

const AppSection = ({children , className}) => {
    return (
        <section className={"w-full px-7 py-10 md:px-10 lg:px-24  "+ className}>
            {children}
        </section>
    )
}

export default AppSection