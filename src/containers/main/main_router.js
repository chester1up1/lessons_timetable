import React, { useEffect , useState } from 'react';
import { Switch, Route } from 'react-router';
import ConnectClassLessons from '../connect_class_lessons/ConnectClassLessons';


function Main_router(props) {
  return (
    <Switch>
      <Route path='/' component={ConnectClassLessons}/>
      <Route path='/class-lessons' component={ConnectClassLessons}/>
    </Switch>
  );
}
    
export default Main_router