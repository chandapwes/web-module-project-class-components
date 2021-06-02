import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  const toDos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: toDos
    }
  }
  

   toggleTodo = (id) => {
     const newToDos = this.state.toDos.map(todo => {
       if(todo.id === id) {
         return {
           ...todo,
           completed: !todo.completed
         }
       } else {
         return (todo);
       }
       })
       this.setState({
        toDos: newToDos
     })
   }

   addTodo = (title) => {
     const newTodo = {
       task: title,
       id: this.state.toDos.length,
       completed: false
     }

     const newToDos = [...this.state.toDos, newTodo];
     this.setState({
       toDos: newToDos
     })
   }

   clearCompleted = () => {
     const newToDos = this.state.toDos.filter(todo => {
       return(todo.completed === false);
     })
     this.setState({
       toDos: newToDos
     })
   }

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>To-Do List</h1>
        <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
