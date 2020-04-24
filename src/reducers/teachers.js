const defaultState = {
    load:false,
    items:[]
  }
    
  const teachers = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_TEACHERS':
        console.log('data',action.data)
        return {
          ...state,
          load:true,
          items:[...action.data]
        };
      case 'ADD_TEACHERS':
        return {
          ...state,
          load:true,
          items:[...state.items,action.data]
        };
      case 'DELETE_TEACHERS':
        return {
          ...state,
          load:true,
          items: state.items.filter(item=>item.name!==action.data),
        };
      default:
        return state
    }
  }
    
    export default teachers;
    