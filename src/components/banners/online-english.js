import React from "react";
import { ManInEnglishBannerOnline } from "../../assets";
import * as typographie from "../typographies";

export const OnlineEnglishBanner = () => {
  return (
      <div 
        className="
          px-2 
          pt-8

          bg-primary01 

          w-screen 
        "
      >
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
            justify-between 
          "
        >
          <div 
            className="
              pr-2.5
              mb-5

              w-1/2
              md:w-full
              sm:w-full 

              flex
              flex-col
              justify-end
            "
          >
            <typographie.H1>
              Online {''}
              <typographie.Span>
                English
              </typographie.Span> 
              {''} tutors & teachers for private lessons
            </typographie.H1>
            <typographie.H4>
              Looking for an online English tutor?
            </typographie.H4>
            <typographie.P>
              Preply is the leading online language learning platform worldwide. You can choose from 24 English teachers with an average rating of 4.83 out of 5 stars given by 2421 customers.
            </typographie.P>
          </div>
          <div 
            className="
              pl-2.5 
              w-1/2 
              -mr-20

              w-1/2
              max-w-md
              md:hidden 
              sm:hidden

              flex
              flex-row
              items-end
            "
          >
            <img 
              src={ManInEnglishBannerOnline} 
              className="
                h-fit
              "
            />
          </div>
        </div>
      </div>
    )
  }