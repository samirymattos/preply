import React, { useState } from "react";
import { TeacherCard } from "../cards";
import {
  ManInEnglishBannerOnline,
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


export const BoxCards = (props) => {

  const teachers = [
    {
      name: "Luca Giusepe",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5,00",
      status: "Online",
      avatar: {AvatarLuca},
      background_photo: {BackgroundLuca}
    },
    {
      name: "Martina Wilson",
      description: "Certified Cambridge teacher",
      rating: "5,0",
      reviews: "24",
      price: "17,95",
      status: "Online",
      avatar: {AvatarMartina},
      background_photo: {BackgroundMartina}
    },
    {
      name: "Paolo Ricardo",
      description: "Paolo Ricardo",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarPaolo},
      background_photo: {BackgroundPaolo}
    },
    {
      name: "Lorenzo Dimarco",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarLorenzo},
      background_photo: {BackgroundLorenzo}
    },
    {
      name: "Marvin McKinney",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarMarvin},
      background_photo: {BackgroundMarvin}
    },
    {
      name: "Guy Hawkins",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarGuy},
      background_photo: {BackgroundGuy}
    },
    {
      name: "Luca Giusepe",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5,00",
      status: "Online",
      avatar: {AvatarLuca},
      background_photo: {BackgroundLuca}
    },
    {
      name: "Martina Wilson",
      description: "Certified Cambridge teacher",
      rating: "5,0",
      reviews: "24",
      price: "17,95",
      status: "Online",
      avatar: {AvatarMartina},
      background_photo: {BackgroundMartina}
    },
    {
      name: "Paolo Ricardo",
      description: "Paolo Ricardo",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarPaolo},
      background_photo: {BackgroundPaolo}
    },
    {
      name: "Lorenzo Dimarco",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarLorenzo},
      background_photo: {BackgroundLorenzo}
    },
    {
      name: "Marvin McKinney",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarMarvin},
      background_photo: {BackgroundMarvin}
    },
    {
      name: "Guy Hawkins",
      description: "Italian teacher",
      rating: "5,0",
      reviews: "6",
      price: "5.00",
      status: "Online",
      avatar: {AvatarGuy},
      background_photo: {BackgroundGuy}
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
        pt-8

        bg-background 

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

            grid
            grid-cols-3
            gap-3
          "
        >
        {teachers && teachers.slice(0, next)?.map((teacher, index) => <TeacherCard key={index} teacher={teacher}/>)}

        {next < teachers?.length && (
          <button
            className="mt-4"
            onClick={handleMoreImage}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  )
}