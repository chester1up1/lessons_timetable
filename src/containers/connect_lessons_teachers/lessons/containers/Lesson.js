import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { FocusLesson, ChangeTeacher, ChangeTeacherToTeacher } from "./actions";

function Lesson(props) {
  const {
    lesson_name,
    teachers,
    FocusLesson,
    ChangeTeacher,
    class_,
    lesson_time,
    lessons,
    // teacher_,
    all_class,
    ChangeTeacherToTeacher,
  } = props;
  const [teacher, setteacher] = useState("");
  const even = (element) => element == lesson_name;
  useEffect(() => {
    all_class.forEach((element) => {
      console.log("element.name == class_", element.class_name, class_);
      if (element.class_name == class_) {
        console.log("12312312312312312312321");
        element.lessons.forEach((item) => {
          if (item.name == lesson_name) {
            setteacher(item.teacher);
          }
        });
      }
    });
  }, [class_]);
  const changeTeacher = (e) => {
    console.log(e.target.name);
    if (teacher == "") {
      setteacher(e.target.value);
      ChangeTeacher(
        lesson_name,
        e.target.value,
        class_,
        teachers,
        lesson_time,
        lessons
      );
    } else {
      ChangeTeacherToTeacher(
        lesson_name,
        e.target.value,
        teacher,
        class_,
        teachers,
        lesson_time,
        lessons
      );
      setteacher(e.target.value);
    }
  };
  return (
    <div
      className="lesson_box col-md-5 col-5"
      onClick={() => FocusLesson(lesson_name)}
    >
      <div className="lesson_name">
        <p>{lesson_name}</p>
      </div>
      <div className="teacher">
        <select onChange={changeTeacher} value={teacher}>
          <option disabled selected value="">
            Оберіть викладача
          </option>
          {teachers.map((item) =>
            item.lessons.map((element) =>
              element == lesson_name ? (
                <option id={item.name} value={item.name}>
                  {item.name}
                </option>
              ) : (
                []
              )
            )
          )}
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  all_class: state.school_class.items,
});

const mapDispatchToProps = {
  FocusLesson,
  ChangeTeacher,
  ChangeTeacherToTeacher,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
