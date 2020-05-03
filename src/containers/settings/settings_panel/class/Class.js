import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Table } from 'reactstrap';
import {AddClass, DeleteClass} from '../../../main/actions'
import times_solid from '../../../../img/times_solid.svg';
import './style.scss'

function Class(props) {
	const {AddClass, school_class, DeleteClass } = props;
	const [class_name, setClassName] = useState('');
	const [classroom, setClassroom] = useState('');
	const [count_students, setCuntStudents] = useState('');
	const [teacher, setTeacher] = useState('');
	const change_class_name = (e) => {
		setClassName(e.target.value);
	}
	const change_classroom = (e) => {
		setClassroom(e.target.value);
	}
	const change_count_students = (e) => {
		setCuntStudents(e.target.value);
	}
	const change_teacher = (e) => {
		setTeacher(e.target.value);
	}
	const GoAddClass = () => {
		let data ={
			class_name : class_name,
			classroom : classroom,
			count_students : count_students,
			teacher : teacher,
			lessons : []
		}
		AddClass(data, class_name);
	}
  return (
    <div className='Class'>
			<p className='title'>Class</p>
			<div className='add_class'>
				<div className='class_info'>
					<InputGroup className='item' style={{maxWidth:'33.33%'}}>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>class name</InputGroupText>
						</InputGroupAddon>
						<Input placeholder="Aa" value={class_name} onChange={change_class_name} />
					</InputGroup>
					<InputGroup className='item' style={{maxWidth:'33.33%'}}>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>classroom</InputGroupText>
						</InputGroupAddon>
						<Input placeholder="Aa" value={classroom} onChange={change_classroom} />
					</InputGroup>
					<InputGroup className='item' style={{maxWidth:'33.33%'}}>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>count of students</InputGroupText>
						</InputGroupAddon>
						<Input placeholder="Aa" value={count_students} onChange={change_count_students} />
					</InputGroup>
				</div>
				<div className='class_info'>
					<InputGroup className='item' style={{maxWidth:'100%'}}>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>class teacher</InputGroupText>
						</InputGroupAddon>
						<Input placeholder="Aa" value={teacher} onChange={change_teacher} />
					</InputGroup>
					<Button style={{maxWidth:'10%'}} className='item' color="primary" onClick={()=>GoAddClass()}>Add</Button>{' '}
				</div>
    	</div>
    	<div className='class_table' style={{maxHeight:'calc(100vh - 300px)',overflow:'auto'}}>
        <Table hover>
          <thead>
            <tr>
              <th>name</th>
              <th>teacher</th>
							<th>count</th>
							<th></th>
            </tr>
          </thead>
          <tbody>
						{school_class.map(item=>{
							return(
								<tr>
									<td>{item.class_name}</td>
									<td>{item.teacher}</td>
									<td>{item.count_students}</td>
									<td><img className='times_solid' src={times_solid} alt="delete" onClick={()=>DeleteClass(item.class_name )} /></td>
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
  school_class : state.school_class.items 
})
     
const mapDispatchToProps = {
	AddClass,
	DeleteClass
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Class)