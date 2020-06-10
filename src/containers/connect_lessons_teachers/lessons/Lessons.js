import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getClassLessons } from "../../main/actions";
import Lesson from "./containers/Lesson";
import Teachers from "./containers/Teachers";

function Lessons(props) {
  const { getClassLessons, school_class, teachers, focus_lesson } = props;
  const [classLessons, setClassLessons] = useState([]);
  useEffect(() => {
    // setClassLessons(getClassLessons(school_class, props.match.params.number));
    try {
      console.log(
        "wow--->",
        getClassLessons(school_class, props.match.params.number)
      );
    } catch (error) {
    } finally {
      setClassLessons(getClassLessons(school_class, props.match.params.number));
    }
  }, [props.match.params.number, []]);
  return (
    <div className="all">
      <div className="ConnectLessonsTeachersPage">
        <div className="class_lessons">
          <div className="title">
            <p>{props.match.params.number + " "} lessons</p>
          </div>
          <div className="lessons row">
            {classLessons
              ? classLessons.map((item) => (
                  <Lesson
                    lesson_name={item.name}
                    teachers={teachers}
                    class_={props.match.params.number}
                    lesson_time={item.time}
                    lessons={classLessons}
                    // teacher_={item.teacher}
                  />
                ))
              : []}
          </div>
        </div>
      </div>
      <Teachers teachers={teachers} lesson={focus_lesson} />
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  school_class: state.school_class.items,
  lessons: state.lessons.items,
  teachers: state.teachers.items,
  focus_lesson: state.lessons.focus,
});

const mapDispatchToProps = {
  getClassLessons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
