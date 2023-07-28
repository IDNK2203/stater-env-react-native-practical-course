const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      const favExist = state.favourites.find(
        (item) => item.id === action.payload.id
      );
      const mealList = favExist
        ? state.favourites.filter((el) => el.id !== action.payload.id)
        : [...state.favourites, action.payload];

      return {
        ...state,
        favourites: [...mealList],
      };

    default:
      return state;
  }
};

export default reducer;
