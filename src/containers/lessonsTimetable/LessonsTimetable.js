import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Class from "./Class";
import "./style.scss";
import Table_router from "./lessons/table_router";

function ConnectClassLessons(props) {
  const { school_class } = props;
  return (
    <div className="less_time">
      <Class />
      <Table_router />
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  school_class: state.school_class.items,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectClassLessons);
