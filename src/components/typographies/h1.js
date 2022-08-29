import React from "react";

export const H1 = (props) => {
  return (
    <h1 
      className="
        font-montserrat 
        font-medium

        text-h1 
        text-neutrals01 

        leading-h1 
      "
    >
      {props.children}
    </h1>
  )
}