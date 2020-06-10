import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { FocusLesson } from "./actions";

export const Teachers = (props) => {
  const { teachers, lesson, FocusLesson } = props;
  const even = (element) => element == lesson;
  return (
    <div className="teachers_">
      <div className="header">
        <p onClick={() => FocusLesson("")} style={{ cursor: "pointer" }}>
          Teachers
        </p>
      </div>
      <div className="all_teachers">
        {lesson == ""
          ? teachers.map((item) => (
              <div className="teacher">
                <div className="top">
                  <p className="name">{item.name}</p>
                  <p>{item.work_time + " "}hours</p>
                </div>
                <div className="bot">
                  <p>lessons:</p>
                  {item.lessons.map((element) => (
                    <p style={{ marginLeft: 5 }}>{" " + element + ","}</p>
                  ))}
                </div>
              </div>
            ))
          : teachers.map((item) =>
              item.lessons.some(even) ? (
                <div className="teacher">
                  <div className="top">
                    <p className="name">{item.name}</p>
                    <p>{item.work_time + " "}hours</p>
                  </div>
                  <div className="bot">
                    <p>lessons:</p>
                    {item.lessons.map((element) => (
                      <p style={{ marginLeft: 5 }}>{" " + element + ","}</p>
                    ))}
                  </div>
                </div>
              ) : (
                []
              )
            )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { FocusLesson };

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
