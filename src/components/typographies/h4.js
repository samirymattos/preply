import React from "react";

export const H4 = (props) => {
  return (
    <h4 
      className="
        font-montserrat 
        font-medium

        text-tertiary01 
        text-h4

        mt-16
      "
    >
      {props.children}
    </h4>
  )
}