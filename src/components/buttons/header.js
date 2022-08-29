import React from "react";

export const HeaderButton = (props) => {
  return (
    <button className="flex flex-row items-center ml-10">
      <img src={props.image} className="max-h-[20px]"/>
      <span className="text-neutrals01 ml-2">{props.children}</span>
    </button>
  )
}