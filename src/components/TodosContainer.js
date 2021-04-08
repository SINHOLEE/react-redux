import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import todos, { remove, insert, changeInput, toggle } from '../modules/todos';
import { bindActionCreators } from 'redux';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();

  const onRemove = bindActionCreators(remove, dispatch);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onRemove={onRemove}
      onToggle={onToggle}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
    ></Todos>
  );
};
export default TodosContainer;

// const TodosContainer = ({
//   input,
//   todos,
//   remove,
//   toggle,
//   insert,
//   changeInput,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onRemove={remove}
//       onToggle={toggle}
//       onChangeInput={changeInput}
//       onInsert={insert}
//     ></Todos>
//   );
// };

// export default connect(
//   (state) => ({ input: state.todos.input, todos: state.todos.todos }),
//   {
//     remove,
//     insert,
//     changeInput,
//     toggle,
//   },
// )(TodosContainer);
