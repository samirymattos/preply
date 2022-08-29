import React from "react";

export const TeacherCard = (props) => {
  return (
    <div className="bg-primary01">
      {props.teacher.name}
    </div>
  )
}