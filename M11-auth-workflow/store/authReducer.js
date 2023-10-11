const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action?.payload?.email,
        },
        // token: {
        //   acesss: action.payload.access,
        //   refresh: action.payload.refresh,
        //   issAt: action.payload.issAt,
        // },
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        // token: null,
      };

    default:
      return state;
  }
};

export default reducer;
