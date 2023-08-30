const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
        },
        accessToken: action.payload.accessToken,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
      };

    default:
      return state;
  }
};

export default reducer;
