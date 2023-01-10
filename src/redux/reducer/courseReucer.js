const stateDefault = {
  allCourses: null,
  detailCourse: null,
  allUser: null,
  message: null,
};

export const CoursesReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_COURSES": {
      const data = action.payload;
      state.allCourses = data;

      return { ...state };
    }

    case "GET_ALL_USER": {
      const data = action.payload;
      state.allUser = data;

      return { ...state };
    }

    case "DETAIL_COURSE": {
      const data = action.payload;
      state.detailCourse = data;
      console.log(state.detailCourse);

      return { ...state };
    }

    case "UP_DATE_USER_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "UP_DATE_USER_FAIL": {
      return { ...state, message: action.payload };
    }

    case "DELETE_USER_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "DELETE_USER_FAIL": {
      return { ...state, message: action.payload };
    }

    case "ADD_USER_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "ADD_USER_FAIL": {
      return { ...state, message: action.payload };
    }

    case "DELETE_COURSE_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "DELETE_COURSE_FAIL": {
      return { ...state, message: action.payload };
    }

    case "UPDATE_COURSE_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "UPDATE_COURSE_FAIL": {
      return { ...state, message: action.payload };
    }

    case "ADD_COURSE_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "ADD_COURSE_FAIL": {
      return { ...state, message: action.payload };
    }

    default:
      return { ...state };
  }
};
