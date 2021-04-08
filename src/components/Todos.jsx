import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    onInsert(input);
    onChangeInput('');
  };

  const onChange = ({ target }) => {
    onChangeInput(target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input}></input>
        <button type="submit">등록</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Todos;
