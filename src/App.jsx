import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text: 'Normal Task asdasdasdasd', completed: false},
  {text: 'This task is so larg ', completed: false},
  {text: 'Short task', completed: true},

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(item => {
          return <TodoItem key={item.text} text={item.text}/>
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
