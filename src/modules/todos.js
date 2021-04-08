import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

let id = 3;
// action 함수
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const insert = createAction(INSERT, (text) => ({
  text,
  id: id++,
  done: false,
}));
export const remove = createAction(REMOVE, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);
// let id = 3;
// // action 함수
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
// export const insert = (text) => ({
//   type: INSERT,
//   todo: { text, id: id++, done: false },
// });
// export const remove = (id) => ({ type: REMOVE, id });
// export const toggle = (id) => ({ type: TOGGLE, id });

// initState
const initState = {
  input: '',
  todos: [
    { id: 1, text: '123', done: true },
    { id: 2, text: '무야호', done: false },
  ],
};

// reducer payload 객체 비할당
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [INSERT]: (state, { payload: newTodo }) => ({
      ...state,
      todos: state.todos.concat(newTodo),
    }),
  },
  initState,
);
// // reducer
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//     [REMOVE]: (state, action) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
//       ),
//     }),
//     [INSERT]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//   },
//   initState,
// );
// reducer
// const todos = (state = initState, action) => {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return { ...state, input: action.input };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

export default todos;
