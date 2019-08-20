import React, { Component } from  'react';

import './App.css';
import {TodoList} from './TodoList';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: 'Quicksand', sans-serif;
    

    ${props =>
    props.primary && css`
        background: palevioletred;
        color: white;
    `};
    `;
    const Container = styled.div`
            text-align: left;
            margin: 10px;
            padding-top: 3rem;
            padding-left: 3rem;
            font-family: 'Quicksand', sans-serif;
        `

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      todoItems: []
    };
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.onSubmitInputValue = 
    this.onSubmitInputValue.bind(this);
    this.removeTodoitem = this.removeTodoitem.bind(this);
  }
removeTodoitem(name, i){
  let todos = this.state.todoItems.slice();
  todos.splice(i,1);
  this.setState({
    todos
  });
}

  onChangeInputValue(event){
    this.setState({
      inputValue: event.target.value
    });
  }
  onSubmitInputValue(event) {
    event.preventDefault();
    this.setState({
      inputValue: '',
      todoItems: [...this.state.todoItems, this.state.inputValue]
    });
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Today's To Dos</h1>
        <form onSubmit={this.onSubmitInputValue}>
          <input 
              type="text" 
              value={this.state.inputValue} 
              onChange={this.onChangeInputValue} 
              />
          <Button primary>Add</Button>
        </form>
        <TodoList todoItems={this.state.todoItems} removeTodo={this.removeTodo}/>
        </Container>
      </div>
      
    );
  }
}
export default App;