import React, { Component } from 'react';
import './TodoForm.css'

class TodoForm extends Component {
    textInput =React.createRef()
    state = {
        text : ''
    }
    handleChange = (e) => {
        const {value} = e.target 
        this.setState({
            text : value 
        })
    }

    handleSubmit  = (e)  => {
        e.preventDefault();
        const {text} = this.state 
        const {onAdd} = this.props 

        onAdd(text)

        this.setState({
            text :''
        })
        this.textInput.current.focus()
    }

    render() {
        const {text} = this.state 
        return (
            <form className="TodoForm" onSubmit={this.handleSubmit}>
                <input type="text" ref={this.textInput} 
                       value={text}
                       onChange ={this.handleChange}  />
                <button type="submit">입력</button>
            </form>
        );
    }
}

export default TodoForm;