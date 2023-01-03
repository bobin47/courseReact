const stateDefault = {
  allCourses: null,
  detailCourse: null,
  allUser: null,
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

    default:
      return { ...state };
  }
};
