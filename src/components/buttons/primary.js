import React from "react";

export const PrimaryButton = (props) => {
  return (
    <button 
      disabled
      className="
        bg-secondary02
        min-w-full
        py-3
        rounded-xl
        text-button
        text-primary01
        font-bold
      "
    >
      {props.children}
    </button>
  )
}