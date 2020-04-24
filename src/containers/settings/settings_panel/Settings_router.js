import React, { useEffect , useState } from 'react';
import Classrooms from './classrooms/Classrooms';
import Teachers from './teachers/Teachers';
import { Switch, Route } from 'react-router';
import Lessons from './lessons/Lessons';
import Class from './class/Class';

function Settings_router(props) {
  return (
    <Switch>
      <Route path='/class' component={Class}/>
      <Route path='/teachers' component={Teachers}/>
      <Route path='/classrooms' component={Classrooms}/>
      <Route path='/lessons' component={Lessons}/>
      <Route exact path='/' component={Classrooms}/>
    </Switch>
  );
}
    
export default Settings_router