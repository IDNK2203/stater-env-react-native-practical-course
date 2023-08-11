import { createContext, useContext, useReducer } from "react";
import reducer from "./expenseReducer";
import { DUMMY_EXPENSES } from "../data/dummy-data";

// Initial State
const initialState = {
  expenses: DUMMY_EXPENSES,
};

// Create Our context
const expenseContext = createContext({
  state: initialState,
  dispatch: () => {},
});

// Provider to wrap around our root react component
export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const contextValue = useMemo(() => {
  //   return { state, dispatch };
  // }, [state, dispatch]);
  return (
    <expenseContext.Provider value={{ dispatch, state }}>
      {children}
    </expenseContext.Provider>
  );
};

// Custom context hook
export const useExpenseContext = () => {
  const { state, dispatch } = useContext(expenseContext);
  return { state, dispatch };
};
