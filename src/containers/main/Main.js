import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Settings from "../settings/Settings";
import { GoClassrooms, GoLessons, GoTeachers, GoClass } from "./actions";
import "./style.scss";
import Main_router from "./main_router";
import users_solid2 from "../../img/users_solid2.svg";
import arrows_alt_h_solid2 from "../../img/arrows_alt_h_solid2.svg";
import chalkboard_teacher_solid2 from "../../img/chalkboard_teacher_solid2.svg";
import clipboard_list_solid_white from "../../img/clipboard_list_solid_white.svg";
import table_solid from "../../img/table_solid.svg";

import { Link } from "react-router-dom";

function Main(props) {
  const { GoClassrooms, GoLessons, GoTeachers, GoClass } = props;
  GoClassrooms();
  GoLessons();
  GoTeachers();
  GoClass();
  return (
    <div className="main">
      <div className="left_panel">
        <Settings />
        <Link to="/class-lessons">
          <div className="item_class_lessons">
            <img className="users_solid" src={users_solid2} alt="" />
            <img
              className="arrows_alt_h_solid"
              src={arrows_alt_h_solid2}
              alt=""
            />
            <img
              className="clipboard_list_solid"
              src={clipboard_list_solid_white}
              alt=""
            />
          </div>
        </Link>
        <Link to="/lessons-teachers">
          <div className="item_class_lessons">
            <img className="users_solid" src={users_solid2} alt="" />
            <img
              className="arrows_alt_h_solid"
              src={arrows_alt_h_solid2}
              alt=""
            />
            <img
              className="chalkboard_teacher_solid"
              src={chalkboard_teacher_solid2}
              alt=""
            />
          </div>
        </Link>

        <Link to="/lessonstimetable">
          <img src={table_solid} alt="table_solid" />
        </Link>
      </div>
      <div className="main_router">
        <Main_router />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  state: state.auth,
});

const mapDispatchToProps = {
  GoClassrooms,
  GoLessons,
  GoTeachers,
  GoClass,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
