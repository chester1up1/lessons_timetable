const defaultState = {
  load: false,
  items: [],
};

const school_class = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CLASS":
      return {
        ...state,
        load: true,
        items: [...action.data],
      };
    case "ADD_CLASS":
      return {
        ...state,
        load: true,
        items: [...state.items, action.data],
      };
    case "DELETE_CLASS":
      return {
        ...state,
        load: true,
        items: state.items.filter((item) => item.class_name !== action.data),
      };
    case "CHANGE_CLASS":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.id
            ? { ...item, lessons: action.data.lessons }
            : item
        ),
      };
    case "CHANGE_LESSON_TO_CLASS":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.id
            ? { ...item, lessons: action.data.lessons }
            : item
        ),
      };
    case "CHANGE_CLASS_TIME":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.id
            ? { ...item, class_time: action.data.time }
            : item
        ),
      };
    case "CHANGE_LESSON_TIME":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.id
            ? { ...item, lessons: action.data.lessons }
            : item
        ),
      };
    case "CHANGE_CLASS_USED_TIME":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.id
            ? { ...item, used_time: action.data.used_time }
            : item
        ),
      };
    case "ADD_TEACHER_TO_LESSON":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.class_
            ? { ...item, lessons: action.data.new_data_lesson_class }
            : item
        ),
      };
    case "ADD_TEACHER_TO_LESSON_CHANGE":
      return {
        ...state,
        load: true,
        items: state.items.map((item) =>
          item.class_name == action.data.class_
            ? { ...item, lessons: action.data.new_data_lesson_class }
            : item
        ),
      };
    default:
      return state;
  }
};

export default school_class;
