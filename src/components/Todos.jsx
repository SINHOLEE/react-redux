import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div data-testid={`todo__${todo.id}`}>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
        data-testid={'todo__input'}
      />
      <span data-testid={'todo__text'}>{todo.text}</span>
      <div>
        <div>
          <button
            onClick={() => onRemove(todo.id)}
            data-testid={`todo__remove-btn`}
          >
            <span>삭제</span>
          </button>
        </div>
      </div>
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
    <div className="todos">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={input}
          data-testid="todos__form__input"
        ></input>
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
