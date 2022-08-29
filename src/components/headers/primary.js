import React from "react";
import * as images from "../../assets";
import * as button from "../buttons";

export const PrimaryHeader = () => {
  return (
    <header className="px-2 pt-6 bg-primary01 w-screen overflow-hidden">
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
          <img className="h-10" src={images.WhiteLogo} />

          <div className="flex flex-row md:flex-col sm:flex-col md:my-4 sm:my-4 bg-neutrals03 ml-9 items-center rounded-lg p-3 text-neutrals02 font-bold">
            <img className="h-4 mr-3" src={images.BookIcon} />

            <input className="max-w-[160px] md:max-w-full sm:max-w-full md:w-full sm:w-full mr-4 outline-none md:mr-0 sm:mr-0 md:py-2 sm:py-2 md:px-1 sm:px-1" placeholder="I am interested in..."/>

            <select className="outline-none cursor-pointer mr-4 md:mr-0 sm:mr-0 md:py-2 sm:py-2 md:w-full sm:w-full">
              <option value="" disabled>Price per hour</option>
              <option value="price1">Price 1</option>
              <option value="price2">Price 2</option>
              <option value="price3">Price 3</option>
            </select>

            <select className="outline-none cursor-pointer mr-4 md:w-full sm:w-full md:mr-0 sm:mr-0 md:py-2 sm:py-2">
              <option value="" disabled>Country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              <option value="country3">Country 3</option>
            </select>
            
            <button.PrimaryButton minWFit={true} style={{padding: "15px 40px"}}>
              Search <img src={images.SearchIcon} className="h-[15px] ml-2"/>
            </button.PrimaryButton>
          </div>
        </div>
        <div className="font-lato flex flex-row items-center my-2 md:mr-10 sm:mr-10">
          <button.HeaderButton image={images.GlobeWhiteIcon}>
            English USD $
          </button.HeaderButton>
          <button.HeaderButton image={images.HelpWhiteIcon}>
            FAQ
          </button.HeaderButton>
          <button.LoginButton />
        </div>
      </div>
    </header>
  )
}