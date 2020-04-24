import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Table, Label } from 'reactstrap';
import './style.scss'
// import {AddLessons, DeleteLessons} from '../../../main/actions'
import times_solid from '../../../../img/times_solid.svg';
import { DeleteTeachers, AddTeachers } from '../../../main/actions';
import Select from 'react-select'
import SelectSearch from 'react-select-search';

function Teachers(props) {
  const {teachers, DeleteTeachers, AddTeachers, lessons} = props;
  const [count,setCount] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)
  const [name_teacher, setNameTeacher] = useState('')
  const [time_teacher, setTimeTeacher] = useState('')
  const [lessons_obj,setLesson] = useState([{
    name:'',
    id: count
  }])
  const handleChange  = (e) => {
    console.log('e',e.value )
  }

  const changeName = (e) =>{
    setNameTeacher(e.target.value)
  }
  const changeTime = (e) =>{
    setTimeTeacher(e.target.value)
  }
  const delLesson = (id) =>{
    setLesson(
      lessons_obj.filter(item=>item.id!==id)
    )
  }
  const changeLesson=(e)=>{
    let data={
      name: e.target.value,
      id: e.target.id,
    }
    console.log('e',e);
    setLesson([...lessons_obj.map(item=>
     item.id == e.target.id ? data : item
    )])
  }

  const addLesson = () =>{
    setCount(count+1)
    setLesson([...lessons_obj,{name:'', id:count+1}])
  }
  const goAddTeacher = () =>{
    let lessons_array = [];
    lessons_obj.forEach(item => {
      lessons_array = [...lessons_array, item.name]
    });
    console.log('lessons_array',lessons_array)
    if(lessons_array!==[]){
      let data = {
        lessons: lessons_array,
        name: name_teacher,
        work_time:time_teacher
      }
     AddTeachers(data, name_teacher);
     setNameTeacher('');
      setTimeTeacher('');
      setLesson([{
        name:'',
        id: count
      }]);
      setCount(1);
    }
  }
  const test = (e) => {
    console.log('e',e.target)
  }
  return (
    <div className='teachers'>
      <p className='title'>Teachers</p>
      <div className='add_teachers'>
        <div className='teachers_info'>
          <InputGroup className='item' style={{maxWidth:'80%'}}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>name</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Aa" value={name_teacher} onChange={changeName}/>
          </InputGroup>
          <InputGroup className='item'>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>time</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Aa" value={time_teacher} onChange={changeTime}/>
          </InputGroup>
        </div>
        {lessons_obj.map(item=>{
          console.log('item', item)
          return(
            <div className='lesson_item'>
              <InputGroup className='item'>
                <Input type="select" id={item.id} onChange={changeLesson}>
                  <option disabled selected >lesson</option>
                  {lessons.map(item=>{
                    return(
                      <option value={item.lesson_name}>{item.lesson_name}</option>
                    )
                  })}
                </Input>
              </InputGroup>
              <Button className='item' color="danger" onClick={()=>{delLesson(item.id)}}>del lesson</Button>{' '}
            </div>
          )
        })}
        <div className='add'>
          <Button className='item' color="success" onClick={()=>addLesson()}>add lesson</Button>{' '}
          <Button className='item' color="primary" onClick={goAddTeacher}>add teacher</Button>{' '}
        </div>
    <div>
      
    </div>
   
    </div>

    <div className='teachers_table' style={{maxHeight:'calc(100vh - 300px)',overflow:'auto'}}>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
              <th>Lessons</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {teachers.map(item=>{
              return(
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.work_time}</td>
                  <td>
                  {item.lessons.map(item=>{
                    return <p key={item}>{item}</p>
                  })}
                  </td>
                  <td><img className='times_solid' src={times_solid} alt="delete" onClick={()=>DeleteTeachers(item.name)}/></td>
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
  teachers: state.teachers.items,
  lessons: state.lessons.items
})
     
const mapDispatchToProps = {
  DeleteTeachers, 
  AddTeachers
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Teachers)