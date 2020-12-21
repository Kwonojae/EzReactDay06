import React, { Component } from 'react';

class Test2 extends Component {
    state = {
        done : false,
        color:'#0f0'
    }
    handleClick = () => {
        const {done} = this.state
        this.setState({
            done: !done
        })
    }
    handleColor = () => {
        this.setState({
        color : '#'+Math.floor(Math.random()*1677321234).toString(16)
        })
    }
   
   
    render() {
        const {done,color} = this.state
        console.log('2.render');
        //컴포넌트 렌더링 시점에 호출
        return (
            <div>
                <button onClick={this.handleClick}>보이기/숨기기</button>
                <button onClick={this.handleColor}>컬러랜덤</button>
                <hr/>
                {done && <Sub color={color}/>}
            </div>
        );
    }
}

class Sub extends Component {
    state = {
        count : 0
    }
    componentDidMount() {
        //Dom에 마운트된 이후 시점에 호출 
        //데이터를 요청하기 위해 axios등을 이용하여 외부api를 호출    
        console.log('3.componentDidMount');
            
    }
    componentDidUpdate(prevProps, prevState) {
        //props가 변하거나 setState가 변화될때 
        console.log('4.componentDidUpdate');
        
    }
    componentWillUnmount() {
        //브라우저에 랜더된 컴포넌트가 사라지는 시점
        //이벤트 및 연동된 외부 라이브러리 제거 시점 
        console.log('5.componentWillUnmount');
    }
    shouldComponentUpdate(nextProps,nextState){
        //성능체크하려고 넣음 자식컴포넌트가 변화가있으면 렌더링해주고 없으면 막아줄때 써주는거 
        return false
        //return false하면 업데이트를 안함 
        //return true하면 기본값으로는 true를 반홤 업데이트 
    }
    increment = () => {
        const {count} =this.state
        this.setState({
            count : count +1
        })
    }
    decrement = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }
    
    render() {
        const {color} = this.props
        const {count} = this.state
        console.log('2.render');
        return (
            <div>
                <h1 style={{color:color}}>컬러색 : {color}</h1>
                <h2>{count}</h2>
                <button onClick={this.increment}>증가</button>
                <button onClick={this.decrement}>감소</button>
            </div>
        );
    }
}

export default Test2;