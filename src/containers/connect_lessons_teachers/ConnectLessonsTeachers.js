import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import './style.scss'
import Lessons_router from './lessons/lessons_router'

function ConnectLessonsTeachers(props) {
  const {school_class, } = props;
  return (
    <div className='ConnectLessonsTeachers'>
      <Class/>
      <Lessons_router/>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
    school_class : state.school_class.items 
})
     
const mapDispatchToProps = {

}
     
export default connect(mapStateToProps, mapDispatchToProps)(ConnectLessonsTeachers)