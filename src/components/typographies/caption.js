import React from "react";

export const Caption = (props) => {
  return (
    <caption
      className="
        text-secondary01
        text-left
        text-caption
      "
    >
      {props.children}
    </caption>
  )
}