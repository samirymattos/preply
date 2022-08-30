import React from "react";
import { StarIcon } from "../../assets";

export const RatingsSpan = (props) => {
  return (
    <div
      className="
        flex
        flex-row
        items-center
        bg-black-opacity25
        p-1
        rounded
        w-fit
        mt-2
      "
    >
      <img src={StarIcon} className="object-contain mr-1"/>
      <span
        className="
          text-yellow
          text-caption
          font-bold
          leading-3
        "
      >
        {props.children}
      </span>
    </div>
  )
}