import React, { useState } from "react";
import { TeacherCard } from "../cards";
import {
  AvatarGuy,
  AvatarLorenzo,
  AvatarLuca,
  AvatarMartina,
  AvatarMarvin,
  AvatarPaolo,
  BackgroundGuy,
  BackgroundLorenzo,
  BackgroundLuca,
  BackgroundMartina,
  BackgroundMarvin,
  BackgroundPaolo
} from "../../assets";
import * as button from "../buttons";


export const TeacherCardBox = (props) => {

  const teachers = [
    {
      name: "Luca Giusepe",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5,00",
      status: "Online",
      avatar: `${AvatarLuca}`,
      background_image: `${BackgroundLuca}`,
      has_verified: true
    },
    {
      name: "Martina Wilson",
      description: "Certified Cambridge teacher",
      rating: "5,0",
      reviews: "24",
      price: "17,95",
      status: "Online",
      avatar: `${AvatarMartina}`,
      background_image: `${BackgroundMartina}`,
      has_verified: true
    },
    {
      name: "Paolo Ricardo",
      description: "Paolo Ricardo",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarPaolo}`,
      background_image: `${BackgroundPaolo}`,
      has_verified: true
    },
    {
      name: "Lorenzo Dimarco",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarLorenzo}`,
      background_image: `${BackgroundLorenzo}`,
      has_verified: true
    },
    {
      name: "Marvin McKinney",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarMarvin}`,
      background_image: `${BackgroundMarvin}`,
      has_verified: true
    },
    {
      name: "Guy Hawkins",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarGuy}`,
      background_image: `${BackgroundGuy}`,
      has_verified: true
    },
    {
      name: "Luca Giusepe",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5,00",
      status: "Online",
      avatar: `${AvatarLuca}`,
      background_image: `${BackgroundLuca}`,
      has_verified: true
    },
    {
      name: "Martina Wilson",
      description: "Certified Cambridge teacher",
      rating: "5,0",
      reviews: "24",
      price: "17,95",
      status: "Online",
      avatar: `${AvatarMartina}`,
      background_image: `${BackgroundMartina}`,
      has_verified: true
    },
    {
      name: "Paolo Ricardo",
      description: "Paolo Ricardo",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarPaolo}`,
      background_image: `${BackgroundPaolo}`,
      has_verified: true
    },
    {
      name: "Lorenzo Dimarco",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarLorenzo}`,
      background_image: `${BackgroundLorenzo}`,
      has_verified: true
    },
    {
      name: "Marvin McKinney",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarMarvin}`,
      background_image: `${BackgroundMarvin}`,
      has_verified: true
    },
    {
      name: "Guy Hawkins",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: `${AvatarGuy}`,
      background_image: `${BackgroundGuy}`,
      has_verified: true
    }
  ]

  const [next, setNext] = useState(6);
  const handleMoreImage = () => {
    setNext(next + 6);
  };


  return (
    <div 
      className="
        px-2 
        mt-20
        pb-20

        bg-background 
        w-screen
      "
    >
      <div 
        className="
          -z-10
          mx-auto 
          
          max-w-2xl 
          xl:max-w-xl 
          lg:max-w-lg 
          md:max-w-md 
          sm:max-w-full 

          grid
          gap-5
          grid-cols-3
          md:grid-cols-2
          sm:grid-cols-1
        "
      >
        {/* by the api it would not be separated by the slice */}
        {teachers && teachers.slice(0, next)?.map((teacher, index) => 
          <TeacherCard key={index} teacher={teacher}/>
        )}
      </div>

      {next < teachers?.length && (
        <div className="flex justify-center w-full max-w-full mx-auto pt-20">
          <button.LoadMoreButton onClick={handleMoreImage}/>
        </div>
      )}
    </div>
  )
}
