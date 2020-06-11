import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Day from "./containers/day";
import "./style.scss";

export const ClassTimetable = (props) => {
  const { class_lessons } = props;
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    class_lessons.forEach((element) => {
      if (element.class_name == props.match.params.number) {
        setLessons(element.lessons);
      }
    });
  }, [class_lessons]);
  return (
    <div className="class_timetable_all">
      <div className="class_timetable_title">
        <p>{props.match.params.number + " "}Class</p>
      </div>
      <div className="class_timetable_row">
        <div className="class_timetable row" style={{ marginLeft: 30 }}>
          <Day
            name_day={"Monday"}
            class_lessons={lessons}
            class_={props.match.params.number}
          />
          <Day
            name_day={"Tuesday"}
            class_lessons={lessons}
            class_={props.match.params.number}
          />
          <Day
            name_day={"Wednesday"}
            class_lessons={lessons}
            class_={props.match.params.number}
          />
          <Day
            name_day={"Thursday"}
            class_lessons={lessons}
            class_={props.match.params.number}
          />
          <Day
            name_day={"Friday"}
            class_lessons={lessons}
            class_={props.match.params.number}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  class_lessons: state.school_class.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimetable);
