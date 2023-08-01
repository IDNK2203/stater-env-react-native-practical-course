const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: id }],
      };

    case "DELETE_EXPENSE":
      const newExpenseState0 = { ...state }.expenses.filter(
        (expense) => expense.id != action.payload.id
      );
      return {
        ...state,
        expenses: [...newExpenseState0],
      };

    case "UPDATE_EXPENSE":
      const newExpenseState1 = [...state.expenses].map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
      return {
        ...state,
        expenses: [...newExpenseState1],
      };

    default:
      return state;
  }
};

export default reducer;
