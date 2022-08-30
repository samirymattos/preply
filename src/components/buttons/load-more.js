import React from "react";

export const LoadMoreButton = (props) => {
  return (
    <button
      {...props}
      id="load-more-button"
      className="
        load-more-button
        min-w-[400px]
        max-w-full
        sm:min-w-full
        py-3
        bg-tertiary01-opacity       
        text-tertiary01
        font-bold
        border
        rounded-lg
      "
    >
      Load more
    </button>
  )
}