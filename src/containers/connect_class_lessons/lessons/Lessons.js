import React, { useEffect , useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux';
import { AddClassLessons, FilterLessons, ChangeLessonToClass, AddClassTime, AddClassUsedTime,  } from '../../main/actions';
import Lesson from './containers/Lesson';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

function Lessons(props) {
  const {lessons, AddClassLessons, FilterLessons, school_class, ChangeLessonToClass, AddClassTime, AddClassUsedTime} = props;
  // const [state_class_lessons, SetClassLessons] = useState([]);
  let state_class_lessons = [];
  const [class_time, SetClassTime] = useState('');
  const [load, setLoad] = useState(false);
  const [state_ , setState_] = useState({
    load:false,
    items: [],
    selected: []
  });
  const [id2List, setId2List] = useState({
    droppable: 'items',
    droppable2: 'selected'
  });
  useEffect(()=>{
    console.log('state_.selected',state_.selected)
    AddClassUsedTime(state_.selected,props.match.params.number)
  },[props.match.params.number,state_.selected.length])
  useEffect(() => {
   ChangeLessons();
   school_class.forEach(element => {
    if(element.class_name==props.match.params.number){
      SetClassTime(element.class_time)
    }
    
  })
  },[lessons, props.match.params.number, school_class,]);

  const ChangeClassTime = (e) => {
    SetClassTime(e.target.value);
    AddClassTime(e.target.value, props.match.params.number);
  }
  const FindLessons = async() =>{
    if(school_class.length!==0){
      school_class.forEach(element => {
        if(element.class_name==props.match.params.number){
        state_class_lessons = FilterLessons(lessons, element.lessons)
        }
      });
    }
  }
  const TryFilterLessons = async() =>{
    let id= 0;
    let data = [];
    let id_selected= 0;
    let data_selected = [];
    if(state_class_lessons.length!==0){
      state_class_lessons.data_all_lessons.forEach(item => {
            data = [...data,{id:`item-${id}`,content:item, time: 1}];
            id++
          });
      state_class_lessons.data_class_lessons.forEach(item => {
           data_selected = [...data_selected,{id:`item-${id}`,content: item.name, time: item.time}];
            id++
          });
    }
    
    setState_({...state_, items: data, selected: data_selected, load: true});
  }
  const ChangeLessons = async() =>{
    await FindLessons();
    await TryFilterLessons();
  }
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "" : "white",
    padding: grid,
    width: '100%',
    height:300,

  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "rgb(148, 77, 230)" : "",
    color: isDragging? 'white' : 'black',
    borderBottom: isDragging ? '' : '2.5px solid rgb(148, 77, 230)',
    textAlign: 'center',
    // styles we need to apply on draggables
    ...draggableStyle
  });
  const grid = 8;
  const getList = id => state_[id2List[id]];
  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
        
    }
    //the same(однакові)
    if (source.droppableId === destination.droppableId) {
      
        const items = reorder(
            getList(source.droppableId),
            source.index,
            destination.index
        );
        let state =  items ;

        if (source.droppableId === 'droppable2') {          
          setState_({...state_,selected : state});
        }
        else{
          setState_({...state_,items : state});
        }

    //різні  
    } else {
     
        const result = move(
            getList(source.droppableId),
            getList(destination.droppableId),
            source,
            destination
        );

        setState_({
            items: result.droppable,
            selected: result.droppable2
        });
        // if(source.droppableId === 'droppable'){
          let data = [];
          result.droppable2.map(item=> data=[...data,{name: item.content, time: item.time*1}])
          // result.droppable2.map(item=> data=[...data,{lesson_name: item.content, lessons_time: 0}])
          if(data!==[]){
            console.log('data!->',data)
            AddClassLessons(data, props.match.params.number)
            ChangeLessonToClass(data, props.match.params.number)
            
          }
          // console.log('HERE--->',source.droppableId,data, props.match.params.number)
          
        // }
    }
}; 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='Lessons_connect'>
        <div className='class_lessons'>
            <div className='title'>
              <p>{props.match.params.number + ' '} lessons</p>
            </div>
            <div className='lessons_list'>
              <div className='top_pannel'>
                <div className='use_time'>
                  <p className='time'>{
                    school_class.map(item=>item.class_name==props.match.params.number?item.used_time:[])
                  }</p>
                  <p className='text'>used time</p>
                </div>
                <div className='all_time'>
                  <p className='text'>all time</p>
                  <input type='number' placeholder='time' value={class_time} onChange={ChangeClassTime} />
                </div>
              </div>
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {state_.selected.map((item, index) =>(
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        <Lesson key={item.content} lesson={item.content} 
                                                                   all_lessons={state_.selected} 
                                                                   id={props.match.params.number}
                                                                   time={item.time}
                                                                   all_time={class_time}
                                                                  />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
              </Droppable>
            </div>
          </div>
          <div className='all_lessons'>
            <div className='title'>
              <p>All lessons</p>
            </div>
          <div className='lessons_list'>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {state_.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state, ownProp) => ({
  lessons: state.lessons.items,
  school_class: state.school_class.items,
})
     
const mapDispatchToProps = {
  AddClassLessons,
  FilterLessons,
  ChangeLessonToClass,
  AddClassTime,
  AddClassUsedTime
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Lessons)
