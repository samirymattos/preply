import React from "react";
import { OnlineEnglishBanner } from "../../components/banners";
import { TeacherCardBox } from "../../components/box-cards/teachers";
import { PrimaryHeader } from "../../components/headers";

export const HomePage = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden font-montserrat">
      <PrimaryHeader/>
      <OnlineEnglishBanner />
      <TeacherCardBox />
    </div>
  );
};