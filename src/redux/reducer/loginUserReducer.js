const stateDefault = {
  message: null,
  messageRegister: null,
};

export const UserReducer = (state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_FAIL": {
      return { ...state, message: action.payload };
    }

    case "LOGIN_SUCCESS": {
      return { ...state, message: action.payload };
    }

    case "REGISTER_SUCCESS": {
      return { ...state, messageRegister: action.payload };
    }

    case "REGISTER_FAIL": {
      return { ...state, messageRegister: action.payload };
    }

    default:
      return { ...state };
  }
};
