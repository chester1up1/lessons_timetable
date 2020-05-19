import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";

function Lesson(props) {
  const { lesson_name, teachers } = props;
  console.log("teachers", teachers);
  return (
    <div className="lesson_box col-md-4 col-4">
      <div className="lesson_name">
        <p>{lesson_name}</p>
      </div>
      <div className="teacher">
        <select>
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

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
