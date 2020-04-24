import { combineReducers } from 'redux';
import classrooms from './classrooms';
import lessons from './lessons';
import teachers from './teachers';
import school_class from './class';

export default combineReducers({
  classrooms,
  lessons,
  teachers,
  school_class,
  });
