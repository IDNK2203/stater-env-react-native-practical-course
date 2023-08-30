import { createContext, useContext, useReducer } from "react";
import reducer from "./authReducer";

// Initial State
const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
  },
  accessToken: null,
};

// Create Our context
const AuthContext = createContext({
  state: initialState,
  dispatch: () => {},
});

// Provider to wrap around our root react component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const contextValue = useMemo(() => {
  //   return { state, dispatch };
  // }, [state, dispatch]);
  return (
    <AuthContext.Provider value={{ dispatch, state }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom context hook
export const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);
  return { state, dispatch };
};
