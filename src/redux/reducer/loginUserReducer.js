const stateDefault = {
  message: null,
  messageRegister: null,
  user:null
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LOGIN_FAIL": {
      return { ...state, message: action.payload.message };
    }

    case "LOGIN_SUCCESS": {
      return { ...state, message: action.payload.message,user:action.payload.user };
    }

    case "REGISTER_SUCCESS": {
      return { ...state, messageRegister: action.payload.message };
    }

    case "REGISTER_FAIL": {
      return { ...state, messageRegister: action.payload.message };
    }

    default:
      return { ...state };
  }
};
