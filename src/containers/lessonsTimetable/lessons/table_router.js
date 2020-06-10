import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import ClassTimetable from "./ClassTimetable";

function Table_router(props) {
  return (
    <Switch>
      {/* <Route exact path="/lessonstimetable" component={FullTimeTable} /> */}
      <Route path="/lessonstimetable/:number" component={ClassTimetable} />
    </Switch>
  );
}

export default Table_router;
