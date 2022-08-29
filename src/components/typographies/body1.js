import React from "react";

export const Body1 = (props) => {
  return (
    <p
      className="
        text-currency
        leading-5
        text-neutrals03
        font-bold
        mr-1.5
        truncate 
      "
    >
      {props.children}
    </p>
  )
}