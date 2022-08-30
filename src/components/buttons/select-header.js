import React from "react";

export const SelectHeaderButton = (props) => {
  return (
    <select className="select-header outline-none cursor-pointer mr-4 md:w-full sm:w-full md:mr-0 sm:mr-0 md:py-2 sm:py-2">
      {props.children}
    </select>
  )
}