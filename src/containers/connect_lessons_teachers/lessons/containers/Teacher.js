import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { AddTimeToLesson  } from '../../../main/actions';

function Teacher(props) {
  const {lessons, time, content} = props;
  const [number, setNumber] = useState(time)
  return (
    <div style={{display:'flex', flexDirection:'column', border:'1px solid red', padding: 5}}>
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', alignItems:'center', borderBottom:'1px solid red'}}>
            <div style={{maxWidth:'70%'}}><p>{content}</p></div>
            <p>{time + ' hours'}</p>
        </div>
        <div style={{paddingLeft: 5, display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {lessons.map(item=>{
            return(
            // <p>{'* '+item}</p>
            <li>{item}</li>
            )
        })}
        </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  school_class: state.school_class.items
})
     
const mapDispatchToProps = {
  AddTimeToLesson
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Teacher)