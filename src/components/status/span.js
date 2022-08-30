import React from "react";

export const Span = (props) => {
  return (
    <span 
      className="
        font-bold

        text-primary01 

        bg-yellow 
        rounded-2xl 
      "
    >
      {props.children}
    </span> 
    )
  }