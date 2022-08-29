import React from "react";
import { OnlineEnglishBanner } from "../../components/banners";
import { TeacherCardBox } from "../../components/box-cards/teachers";

export const HomePage = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <OnlineEnglishBanner />
      <TeacherCardBox />
    </div>
  );
};