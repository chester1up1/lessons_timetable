import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./containers/day";
import "./style.scss";

export const ClassTimetable = () => {
  return <div className="class_timetable"></div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimetable);
