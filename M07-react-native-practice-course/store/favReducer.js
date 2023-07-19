const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      const favExist = state.favourites.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        favourites: [...state.favourites, favExist ? action.payload : null],
      };

    default:
      return state;
  }
};

export default reducer;

//    case "TOGGLE_MODE":
// return { ...state, isDark: !state.isDark }
// case "ADD_TODO":
//   const mostRecentTodos = state.todos.sort((a, b) => b.id - a.id);
//   return {
//     ...state, todos: [
//       ...state.todos,
//       {
//         // generate it's id based on the most recent todo
//         id: mostRecentTodos.length > 0 ? mostRecentTodos[0].id + 1 : 0,
//         title: action.payload,
//         isCompleted: false,
//         createdAt: new Date(),
//       }
//     ]
//   };
// case "REMOVE_TODO":
//   return { ...state, todos: state.todos.filter(el => el.id !== action.payload) }
// case "MARK_AS_DONE":
//   const selectedTodo = state.todos.find(el => el.id === action.payload);
//   if (selectedTodo) {
//     return {
//       ...state, todos: [...state.todos.filter(el => el.id !== action.payload), {
//         ...selectedTodo,
//         isCompleted: true,
//       }]
//     }
//   } else {
//     return state
//   }
