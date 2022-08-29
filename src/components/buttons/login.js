import React from "react";
import { AvatarBlueIcon } from "../../assets";

export const LoginButton = () => {
  return (
    <button className="flex flex-row items-center ml-10">
      <img src={AvatarBlueIcon} className="max-h-[20px]"/>
      <span className="text-secondary02 ml-2">Login</span>
    </button>
  )
}