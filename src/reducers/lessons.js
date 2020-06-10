const defaultState = {
  load: false,
  items: [],
  focus: "",
};

const lessons = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_LESSONS":
      return {
        ...state,
        load: true,
        items: [...action.data],
      };
    case "ADD_LESSON":
      return {
        ...state,
        load: true,
        items: [...state.items, action.data],
      };
    case "DELETE_LESSONS":
      return {
        ...state,
        load: true,
        items: state.items.filter((item) => item.lesson_name !== action.data),
      };
    case "FOCUS_LESSON":
      return {
        ...state,
        focus: action.data,
      };
    default:
      return state;
  }
};

export default lessons;
