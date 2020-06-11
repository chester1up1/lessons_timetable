import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { AddLessonToTimetable } from "./actions";

export const Lesson = (props) => {
  const {
    AddLessonToTimetable,
    lessons,
    number,
    name_day,
    class_,
    id_,
    all_class,
  } = props;
  let lessons_day = {};
  useEffect(() => {
    setLesson("");
    all_class.forEach((element) => {
      if (element.class_name == class_) {
        Object.entries(element).forEach((item) => {
          if (item[0] == name_day) {
            setLesson(item[1][id_].lesson);
            setClassroom(item[1][id_].classroom);
          }
        });
      }
    });
  }, [all_class, class_]);
  const [lesson, setLesson] = useState("");
  const [classroom, setClassroom] = useState("");
  const handleChange = (e) => {
    setLesson(e.target.value);
  };
  const AddLesson = (e) => {
    if (lesson !== "") {
      setClassroom(e.target.value);
      lessons.forEach((element) => {
        if (element.name == lesson) {
          AddLessonToTimetable(
            name_day,
            e.target.id,
            class_,
            lesson,
            element.teacher,
            e.target.value,
            all_class
          );
        }
      });
    }
  };
  return (
    <div className="item">
      <p>{number + ". "}</p>
      <Input
        className="lesson"
        type="select"
        name="select"
        id={id_}
        onChange={handleChange}
        value={lesson}
      >
        <option selected value="">
          Оберіть урок
        </option>
        {lessons.map((item) => (
          <option>{item.name}</option>
        ))}
      </Input>
      <Input
        type="numeber"
        name="numeber"
        onChange={AddLesson}
        value={classroom}
        id={id_}
      ></Input>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { AddLessonToTimetable };

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
