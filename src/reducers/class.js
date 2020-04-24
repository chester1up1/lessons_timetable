const defaultState = {
  load:false,
  items:[]
}
  
const school_class = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CLASS':
      return {
        ...state,
        load:true,
        items:[...action.data]
      };
    case 'ADD_CLASS':
      return {
        ...state,
        load:true,
        items:[...state.items,action.data]
      };
    case 'DELETE_CLASS':
      return {
        ...state,
        load:true,
        items: state.items.filter(item=>item.class_name!==action.data),
      };
    default:
      return state
  }
}
  
  export default school_class;
  