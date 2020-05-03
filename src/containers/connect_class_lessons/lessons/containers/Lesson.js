import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import './style.scss';
import { AddTimeToLesson  } from '../../../main/actions';
import plus_solid from '../../../../img/plus_solid.svg'
import minus_solid from '../../../../img/minus_solid.svg'
function Lesson(props) {
  const {lesson, all_lessons, AddTimeToLesson, id, school_class, time, all_time} = props;
  const [number, setNumber] = useState(time)
  // const changeTime = (e) => {
  //   AddTimeToLesson(all_lessons, id, lesson, e.target.value*1, all_time*1, number*1)
  //   setNumber(e.target.value)
  // }

  return (
    <div className='Lesson'>
      {lesson}
      <div className='control'>
        <div className='control_panel'>
          <img className='plus_solid' src={plus_solid} alt="plus"  onClick={()=>AddTimeToLesson('plus', lesson, all_lessons, time*1, id, all_time*1)}/>
          <img className='minus_solid' src={minus_solid} alt="close"onClick={()=>AddTimeToLesson('minus', lesson, all_lessons, time*1, id, all_time*1)}/>
        </div>
         <p>{time}</p>
      </div>
    
      {/* <InputGroup className='time' >
        <Input onChange={changeTime} value ={time}/>
        <InputGroupAddon addonType="append">
          <InputGroupText>time</InputGroupText>
        </InputGroupAddon>
      </InputGroup> */}
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  school_class: state.school_class.items
})
     
const mapDispatchToProps = {
  AddTimeToLesson
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Lesson)