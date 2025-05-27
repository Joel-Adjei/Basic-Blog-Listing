import React from "react";
import {Link} from 'react-router'

const AppButton = ({title , className , to , ...otherProps}) => {
    return (
        <Link to={to}>
            <button {...otherProps} className={"bg-blue-700 rounded cursor-pointer text-gray-100 text-sm px-7 py-2 "+ className}>
                {title}
            </button>
        </Link>

    )
}

export default AppButton