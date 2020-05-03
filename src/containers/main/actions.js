import { GetClassroomsFirebase,
         PostClassrooms,
         DeleteClassroomsFire,
         PostLessons, 
         GetLessonsFirebase, 
         DeleteLessonsFire, 
         GetTeachersFirebase, 
         DeleteTeachersFire, 
         PostTeachers, 
         PostClass, 
         GetClassFirebase,
         DeleteClassFire,
         ChangeClassLessonsAdd,
         ChangeClassTime,
         ChangeClassUsedTime
} from "../../firebase/actions";

export function GoClassrooms() {
  return async (dispatch) => {
    try {
      let result = GetClassroomsFirebase().then((data)=>{
          dispatch({type: 'GET_CLASSROOM', data: data});
      });
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}
export function AddClassrooms(result, number) {
  return async (dispatch) => {
    try {
      PostClassrooms(result,number);
      dispatch({type: 'ADD_CLASSROOM', data: result});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function DeleteClassrooms(id) {
  return async (dispatch) => {
    try {
      DeleteClassroomsFire(id)
      dispatch({type: 'DELETE_CLASSROOM', data: id});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddLessons(result,id) {
  return async (dispatch) => {
    try {
      PostLessons(result,id);
      dispatch({type: 'ADD_LESSON', data: result});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function GoLessons() {
  return async (dispatch) => {
    try {
      let result = GetLessonsFirebase().then((data)=>{
          dispatch({type: 'GET_LESSONS', data: data});
      });
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function DeleteLessons(id) {
  return async (dispatch) => {
    try {
      DeleteLessonsFire(id)
      dispatch({type: 'DELETE_LESSONS', data: id});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function GoTeachers() {
  return async (dispatch) => {
    try {
      let result = GetTeachersFirebase().then((data)=>{
          dispatch({type: 'GET_TEACHERS', data: data});
      });
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function DeleteTeachers(id) {
  return async (dispatch) => {
    try {
      DeleteTeachersFire(id)
      dispatch({type: 'DELETE_TEACHERS', data: id});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddTeachers(result,id) {
  return async (dispatch) => {
    try {
      PostTeachers(result,id);
      dispatch({type: 'ADD_TEACHERS', data: result});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddClass(result,id) {
  return async (dispatch) => {
    try {
      PostClass(result,id);
      dispatch({type: 'ADD_CLASS', data: result});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function GoClass() {
  return async (dispatch) => {
    try {
      let result = GetClassFirebase().then((data)=>{
          dispatch({type: 'GET_CLASS', data: data});
      });
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function DeleteClass(id) {
  return async (dispatch) => {
    try {
      DeleteClassFire(id)
      dispatch({type: 'DELETE_CLASS', data: id});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddClassLessons(result,id) {
  return async (dispatch) => {
    try {
      ChangeClassLessonsAdd(result,id);
      dispatch({type: 'CHANGE_CLASS', data: result});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export const FilterLessons = (all_lessons, class_lessons) => {
  return () =>{
    let data = {
          data_class_lessons: class_lessons,
          data_all_lessons: all_lessons.map(item=> item.lesson_name)
        }
      data.data_class_lessons.forEach(element => {
        data = {...data, data_all_lessons: data.data_all_lessons.filter(item=>item!==element.name)}
    });
    console.log('data----->',data)
    return data
  }
}

export function ChangeLessonToClass(result,id) {
  return async (dispatch) => {
    try {
      let result_ = {lessons: result, id: id}
      dispatch({type: 'CHANGE_LESSON_TO_CLASS', data: result_});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddClassTime(result,id) {
  return async (dispatch) => {
    try {
      ChangeClassTime(result,id);
      let result_ = {time: result*1, id: id}
      dispatch({type: 'CHANGE_CLASS_TIME', data: result_});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

export function AddTimeToLesson(value, lesson, all_lessons, time, id, all_time) {
  
  return async (dispatch) => {
    console.log(value, lesson, all_lessons)
    let new_time = 0;
    let new_data = [];
    let result_new ={}
    try {
      all_lessons.forEach(element => {
        new_time = new_time + element.time
      });
    } 
    catch (error) {
      
    }
    finally{
      switch (value) {
        case 'plus':
          if(new_time + 1 <= all_time){
            new_data = all_lessons.map(item=> item.content == lesson?{name: item.content, time: item.time+1}:{name: item.content, time: item.time});
            result_new = {used_time: new_time+1, id:id}
            let result_ = {lessons: new_data, id: id}
            ChangeClassLessonsAdd(result_.lessons,id)
            dispatch({type: 'CHANGE_LESSON_TIME', data: result_});
            ChangeClassUsedTime(result_new.new_time,id);
            dispatch({type: 'CHANGE_CLASS_USED_TIME', data: result_new});
          }
          break;
        case 'minus':
          if(time > 0){
            new_data = all_lessons.map(item=> item.content == lesson?{name: item.content, time: item.time-1}:{name: item.content, time: item.time});
            result_new = {used_time: new_time-1, id:id}
            let result_ = {lessons: new_data, id: id}
            ChangeClassLessonsAdd(result_.lessons,id)
            dispatch({type: 'CHANGE_LESSON_TIME', data: result_});
            ChangeClassUsedTime(result_new.new_time,id);
            dispatch({type: 'CHANGE_CLASS_USED_TIME', data: result_new});
          }
          break;
        default:
          new_data = all_lessons.map(item=> item.content == lesson?{name: item.content, time: item.time}:{name: item.content, time: item.time});
          result_new = {used_time: new_time, id:id}
          let result_ = {lessons: new_data, id: id}
          ChangeClassLessonsAdd(result_.lessons,id)
          dispatch({type: 'CHANGE_LESSON_TIME', data: result_});
          ChangeClassUsedTime(result_new.new_time,id);
          dispatch({type: 'CHANGE_CLASS_USED_TIME', data: result_new});
          break;
      } 
    }
  }
}

export function AddClassUsedTime(result,id) {
  return async (dispatch) => {
    try {
      let new_time = 0;
      result.forEach(element => {
        new_time = new_time + element.time*1
      });
      let result_ = {used_time: new_time, id:id}
      ChangeClassUsedTime(result_.new_time,id);
      dispatch({type: 'CHANGE_CLASS_USED_TIME', data: result_});
    } catch (error) {
      console.log("TCL: getUsers -> error", error)
      }
    }
}

