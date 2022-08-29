import React from "react";
import { StarIcon, VerifyIcon } from "../../assets";
import { RatingsSpan } from "../spans";
import * as typographies from "../typographies";
import * as button from "../buttons";

export const TeacherCard = ({teacher}) => {
  return (
    <div className="z-10 font-montserrat">
      <div 
        className="
          h-[370px]
          relative 
          rounded-t-3xl

          bg-local 
          bg-origin-padding 
          bg-no-repeat 
          bg-center 
          bg-cover 

          flex
          flex-col
          justify-between
        "
        style={{backgroundImage: `url(${teacher.background_image})`}}
      >
        <div 
          className="
            backdrop-brightness-80
            h-full
            rounded-t-3xl
          "
        >
          <div className="py-8 px-6 overflow-hidden">
            <typographies.Status>
              {teacher.status} 
            </typographies.Status>
          </div>
        </div>

        <div
          className="
            relative
            z-20
            bg-white-opacity
            backdrop-blur
            backdrop-contrast-50

            py-4
            px-6 

            flex 
            flex-row
            items-end
            justify-between
          "
        >
          <div className="flex flex-row items-center max-w-full">

            {/* I couldn't remove only the image, normally this avatar would be a component that would have a rounded style and white borders */}
            <img src={teacher.avatar} />

            <div className="ml-2 flex flex-col">
              <div className="flex flex-row items-center">
                <typographies.Body1>
                  {teacher.name}
                </typographies.Body1>

                {teacher.has_verified &&
                  <img src={VerifyIcon}/>
                }
              </div>

              <typographies.Caption>
                {teacher.description}
              </typographies.Caption>

              <RatingsSpan>
                {teacher.rating}
              </RatingsSpan>

              <typographies.Caption1>
                {teacher.reviews} reviews
              </typographies.Caption1>
            </div>
          </div>

          <div className="flex flex-col items-end leading-4">
            <typographies.Currency>
              USD {teacher.price}
            </typographies.Currency>

            <typographies.Caption>
              Price per hour
            </typographies.Caption>
          </div>
        </div>
      </div>
      <div
        className="
          bg-background2
          py-8 px-6
          rounded-b-3xl
        "
      >
        <button.PrimaryButton>
          Trail lesson
        </button.PrimaryButton>
      </div>
    </div>
  )
}