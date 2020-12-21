import React, { Component } from 'react';

class Test1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'test'
        }
        console.log('1.constructor');
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        console.log('3.componentDidMount');
    }
    handleClick = () => {
        this.setState({
            name:'홍길동'
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('4.componentDidUpdate');
    }
    render() {
        const {name} = this.state
        console.log('2.render');
        return (
            <div>
                <h2>이름:{name}</h2>
                <button onClick={this.handleClick}>이름변경</button>        
            </div>
        );
    }
}

export default Test1;