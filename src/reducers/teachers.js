const defaultState = {
  load: false,
  items: [],
};

const teachers = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_TEACHERS":
      console.log("data", action.data);
      return {
        ...state,
        load: true,
        items: [...action.data],
      };
    case "ADD_TEACHERS":
      return {
        ...state,
        load: true,
        items: [...state.items, action.data],
      };
    case "DELETE_TEACHERS":
      return {
        ...state,
        load: true,
        items: state.items.filter((item) => item.name !== action.data),
      };
    case "ADD_TEACHER_TO_LESSON":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.name == action.data.teacher
            ? { ...item, work_time: action.data.work_time }
            : item
        ),
      };
    case "ADD_TEACHER_TO_LESSON_CHANGE":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.name == action.data.teacher_new
            ? { ...item, work_time: action.data.new_work_time }
            : item.name == action.data.teacher_prev
            ? { ...item, work_time: action.data.prev_work_time }
            : item
        ),
      };
    default:
      return state;
  }
};

export default teachers;
