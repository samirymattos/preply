import React from "react";

export const Caption1 = (props) => {
  return (
    <caption
      className="
        text-neutrals03
        text-min-caption
      "
    >
      {props.children}
    </caption>
  )
}