const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPENSES":
      const newExpense = [...action.payload].reverse();
      return {
        ...state,
        expenses: newExpense,
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [{ ...action.payload }, ...state.expenses],
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
