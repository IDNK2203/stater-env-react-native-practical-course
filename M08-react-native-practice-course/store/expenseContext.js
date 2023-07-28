import { createContext, useContext, useReducer } from "react";
import reducer from "./favReducer";

// Initial State
const initialState = {
  favourites: [],
};

// Create Our context
const favContext = createContext({
  state: initialState,
  dispatch: () => {},
});

// Provider to wrap around our root react component
export const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <favContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

// Custom context hook
export const useFavContext = () => {
  const { state, dispatch } = useContext(favContext);
  return { state, dispatch };
};
