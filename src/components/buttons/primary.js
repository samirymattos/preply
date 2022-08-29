import React from "react";

export const PrimaryButton = (props) => {
  return (
    <button 
      {...props}
      className={
        props.minWFit 
        && 
          "bg-secondary02 min-w-fit py-3 rounded-xl text-button text-primary01 font-bold flex flex-row items-center justify-center" 
        || 
          "bg-secondary02 min-w-full py-3 rounded-xl text-button text-primary01 font-bold flex flex-row items-center justify-center"
      }
    >
      {props.children}
    </button>
  )
}