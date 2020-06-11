import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import Lesson from "./lesson";

export const Day = (props) => {
  const { name_day, class_lessons, class_, all_class } = props;
  let lessons = class_lessons;
  const nmb = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="day  col-md-4 col-4">
      <div className="name">{name_day}</div>
      {nmb.map((item) => (
        <Lesson
          lessons={lessons}
          number={item}
          name_day={name_day}
          class_={class_}
          id_={item}
          all_class={all_class}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ all_class: state.timetable.items });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Day);
