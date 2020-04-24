import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Table } from 'reactstrap';
import './style.scss'
import {AddLessons, DeleteLessons} from '../../../main/actions'
import times_solid from '../../../../img/times_solid.svg';

function Lessons(props) {
  const {AddLessons,DeleteLessons,lessons} = props;
  const [lesson,setLesson] = useState('')
  const changeLesson=(e)=>{
    setLesson(e.target.value)
  }
  const goAddLessons = () =>{
    let data ={
      lesson_name:lesson
    }
    AddLessons(data,lesson);
    setLesson('');
  }
  return (
    <div className='lessons'>
      <p className='title'>Lessons</p>
      <div className='add_lesson'>
        <InputGroup className='item'>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>lesson</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Aa"  onChange={changeLesson} value={lesson}/>
        </InputGroup>
        <Button className='item' color="primary" onClick={()=>goAddLessons()}>Add</Button>{' '}
      </div>
      <div className='lessons_table' style={{maxHeight:'calc(100vh - 300px)',overflow:'auto'}}>
        <Table hover>
          <thead>
            <tr>
              <th>Lesson</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lessons.map(item=>{
              return(
                <tr>
                  <td>{item.lesson_name}</td>
                  <td><img className='times_solid' src={times_solid} alt="delete" onClick={()=>DeleteLessons(item.lesson_name)} /></td>
                </tr>
              )
            })} 
          </tbody>
        </Table>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  lessons: state.lessons.items
})
     
const mapDispatchToProps = {
  AddLessons,
  DeleteLessons
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Lessons)