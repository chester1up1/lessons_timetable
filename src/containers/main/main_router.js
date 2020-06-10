import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import ConnectClassLessons from "../connect_class_lessons/ConnectClassLessons";
import ConnectLessonsTeachers from "../connect_lessons_teachers/ConnectLessonsTeachers";
import LessonsTimetable from "../lessonsTimetable/LessonsTimetable";

function Main_router(props) {
  return (
    <Switch>
      <Route path="/lessons-teachers" component={ConnectLessonsTeachers} />
      <Route path="/class-lessons" component={ConnectClassLessons} />
      <Route path="/lessonstimetable" component={LessonsTimetable} />
      <Route path="/" component={ConnectClassLessons} />
    </Switch>
  );
}

export default Main_router;
