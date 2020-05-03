import React, { useEffect , useState } from 'react';
import { Switch, Route } from 'react-router';
import Defoult_lessons from './defoult_lessons';
import Lessons from './Lessons';


function Lessons_router(props) {
  return (
    <Switch>
        <Route exact path='/class-lessons' component={Defoult_lessons}/>
        <Route path='/class-lessons/:number' component={Lessons}/>
        <Route path='/' component={Defoult_lessons}/>
    </Switch>
  );
}
    
export default Lessons_router