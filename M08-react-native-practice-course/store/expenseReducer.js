// const initialState = {
//   expenses: DUMMY_EXPENSES,
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      const newState0 = {
        ...state,
        [expenses]: [...state.expenses, { ...action.payload, id: id }],
      };
      return newState0;
    case "DELETE_EXPENSE":
      const newExpenseState0 = [...state.expenses].filter(
        (el) => el !== action.payload.id
      );
      const newState1 = {
        ...state,
        [expenses]: [...newExpenseState0],
      };
      return newState1;
    case "UPDATE_EXPENSE":
      const newExpenseState1 = [...state.expenses].map((el) =>
        el === action.payload.id ? action.payload : el
      );
      const newState2 = {
        ...state,
        [expenses]: [...newExpenseState1],
      };
      return newState2;
    default:
      return state;
  }
};

export default reducer;
