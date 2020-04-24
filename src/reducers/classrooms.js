const defaultState = {
  load:false,
  items:[]
}
  
const classrooms = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CLASSROOM':
      return {
        ...state,
        load:true,
        items:[...action.data]
      };
    case 'ADD_CLASSROOM':
      return {
        ...state,
        load:true,
        items:[...state.items,action.data]
      };
    case 'DELETE_CLASSROOM':
      return {
        ...state,
        load:true,
        items: state.items.filter(item=>item.classroom_number!==action.data),
      };
    default:
      return state
  }
}
  
  export default classrooms;
  