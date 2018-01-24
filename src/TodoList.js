import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { list, onToDoRemoveButtonClicked } = this.props;

    return (
      <div className="todo-list">
        {list.map((todo, i) => (
          <Todo key={i} index={i} text={todo} bla={onToDoRemoveButtonClicked} />
        ))}
      </div>
    );
  }
}

export default TodoList;
