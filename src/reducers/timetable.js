const defaultState = {
  load: false,
  all: [],
  items: [],
};

const timetable = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_TIEMTABLE":
      return {
        ...state,
        load: true,
        items: [...action.data],
      };
    case "GET_LESSONSTIEMTABLE":
      return {
        ...state,
        load: true,
        all: [...action.data],
      };

    default:
      return state;
  }
};

export default timetable;
