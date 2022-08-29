import React from "react";

export const Status = (props) => {
  return (
    <span
      className="
        bg-secondary01-opacity
        py-1
        px-2
        rounded-3xl

        text-neutrals01
        font-bold
        border-neutrals01
        border
      "
    >
      {props.children} 
    </span>
  )
}