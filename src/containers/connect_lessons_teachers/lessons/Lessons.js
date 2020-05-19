import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getClassLessons } from "../../main/actions";
import Lesson from "./containers/Lesson";

function Lessons(props) {
  const { getClassLessons, school_class, teachers } = props;
  const [classLessons, setClassLessons] = useState([]);
  useEffect(() => {
    setClassLessons(getClassLessons(school_class, props.match.params.number));
  }, [props.match.params.number, []]);
  return (
    <div className="ConnectLessonsTeachersPage">
      <div className="class_lessons">
        <div className="title">
          <p>{props.match.params.number + " "} lessons</p>
        </div>
        <div className="lessons row">
          {classLessons
            ? classLessons.map((item) => (
                <Lesson lesson_name={item.name} teachers={teachers} />
              ))
            : []}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  school_class: state.school_class.items,
  lessons: state.lessons.items,
  teachers: state.teachers.items,
});

const mapDispatchToProps = {
  getClassLessons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
