import React, { useEffect , useState } from 'react';
import { Switch, Route } from 'react-router';
import ConnectClassLessons from '../connect_class_lessons/ConnectClassLessons';
import ConnectLessonsTeachers from '../connect_lessons_teachers/ConnectLessonsTeachers';


function Main_router(props) {
  return (
    <Switch>
      <Route exact path='/' component={ConnectClassLessons}/>
      <Route path='/class-lessons' component={ConnectClassLessons}/>
      <Route path='/lessons-teachers' component={ConnectLessonsTeachers}/>
    </Switch>
  );
}
    
export default Main_router