import React from "react";

export const Currency = (props) => {
  return (
    <span
      className="
        font-bold
        text-currency
        text-neutrals03
      "
    >
      {props.children}
    </span>
  )
}