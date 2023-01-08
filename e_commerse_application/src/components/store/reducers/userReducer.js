const User_info = {
  userInfo: {},
};

const userReducer = (state = User_info, action) => {
  switch (action.type) {
    case "USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
