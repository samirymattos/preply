import React from "react";

export const P = (props) => {
  return (
    <p
      className="
        max-w-65

        text-neutrals01 
        text-h5
      "
    >
      {props.children}
    </p>
  )
}