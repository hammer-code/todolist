import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Eat', 'Pray', 'Coding', 'Sleep'],
    };
  }

  removeTodoByIndex = (index) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <TodoList onToDoRemoveButtonClicked={this.removeTodoByIndex} list={todos} />
      </div>
    );
  }
}

export default App;
