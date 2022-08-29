import React from "react";
import { OnlineEnglishBanner } from "../../components/banners";
import { TeacherCardBox } from "../../components/box-cards/teachers";

export const HomePage = () => {
  return (
    <div>
      <OnlineEnglishBanner />
      <TeacherCardBox />
    </div>
  );
};