import React from "react";
import React from 'react'

function Button({
    children,
    type="button",
    bgColor="red",
    textColor="white",
    className="",
    ...props
}) {
    return (
        <button
            className={`bg-${bgColor} text-${textColor} px-4 py-2 rounded-md ${className}`} {...props}
        >
            {children}
        </button>
    )
}

export default Button
