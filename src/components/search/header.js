import React from "react";
import * as button from "../buttons";
import * as image from "../../assets";

export const HeaderSearch = () => {
  return (
    <div className="flex flex-row md:flex-col sm:flex-col md:my-4 sm:my-4 bg-neutrals03 ml-9 items-center rounded-lg p-3 text-neutrals02 font-bold">
      <img className="h-4 mr-3" src={image.BookIcon} />

      <input className="max-w-[160px] md:max-w-full sm:max-w-full md:w-full sm:w-full mr-4 outline-none md:mr-0 sm:mr-0 md:py-2 sm:py-2 md:px-1 sm:px-1" placeholder="I am interested in..."/>

      <button.SelectHeaderButton>
        <option value="" disabled>Price per hour</option>
        <option value="price1">Price 1</option>
        <option value="price2">Price 2</option>
        <option value="price3">Price 3</option>
      </button.SelectHeaderButton>

      <button.SelectHeaderButton>
        <option value="" disabled>Country</option>
        <option value="country1">Country 1</option>
        <option value="country2">Country 2</option>
        <option value="country3">Country 3</option>
      </button.SelectHeaderButton>
      
      <button.PrimaryButton minWFit={true} style={{padding: "15px 40px"}}>
        Search <img src={image.SearchIcon} className="h-[15px] ml-2"/>
      </button.PrimaryButton>
    </div>
  )
};