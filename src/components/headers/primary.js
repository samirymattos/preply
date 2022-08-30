import React from "react";
import * as image from "../../assets";
import * as button from "../buttons";
import { HeaderSearch } from "../search/header";

export const PrimaryHeader = () => {
  return (
    <header className="px-2 py-6 bg-primary01 w-screen overflow-hidden">
      <div 
        className="
          mx-auto 
          
          max-w-2xl 
          xl:max-w-xl 
          lg:max-w-lg 
          md:max-w-md 
          sm:max-w-full 
          
          flex 
          flex-row 
          md:flex-col 
          sm:flex-col
          flex-wrap
          justify-between 
          md:items-center 
          sm:items-center
        "
      >
        <div className="flex flex-row items-center md:flex-col sm:flex-col sm:justify-center md:justify-center">
          <img className="h-10" src={image.WhiteLogo} />

          <HeaderSearch />
        </div>
        <div className="font-lato flex flex-row items-center my-2 md:mr-10 sm:mr-10">
          <button.HeaderButton image={image.GlobeWhiteIcon}>
            English USD $
          </button.HeaderButton>
          <button.HeaderButton image={image.HelpWhiteIcon}>
            FAQ
          </button.HeaderButton>
          <button.LoginButton />
        </div>
      </div>
    </header>
  )
}