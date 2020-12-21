import React, { Component } from 'react';
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends Component {
    no = 1 //고유번호 
    state = {
        todos :[]
    }
    // [  {no:1, text:'점심먹기'}, ]
    handleAdd = (text) => {
        const {todos}  = this.state 
        this.setState({
            // todos : todos.concat({no:this.no++,text:text})
            todos : todos.concat({no:this.no++, text , done:false})
        }) 
    }

    handleToggle = (id)  => {
        const {todos} = this.state 
        this.setState({  //갱신 
            todos : todos.map( todo => {
                if( todo.no === id) {
                    return {
                        ...todo,
                        done: !todo.done 
                    }
                }
                return todo
            })
        })
    }

    handleRemove = (id) => {
        const {todos} = this.state 
        this.setState({
            todos : todos.filter( todo => todo.no !== id )
        })
    }

    render() {
        const { todos } = this.state 
        return (
            <div className="Todo">
                <h2>Todo List</h2>
                <TodoForm onAdd = {this.handleAdd} />
                <TodoList onRemove = {this.handleRemove} todos ={ todos }  onToggle = {this.handleToggle} />
            </div>
        );

    }
}

export default Todo;