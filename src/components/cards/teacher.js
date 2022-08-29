import React from "react";

export const TeacherCard = (props) => {
  return (
    <div className="" style={{backgroundImage: `url(${props.background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
      {props.teacher.name}
    </div>
  )
}