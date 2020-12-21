import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Test5 extends Component {
    state = {
        data : [
            {no:1, name:'강호동', age:20, addr:'서울'},
            {no:2, name:'강호동', age:20, addr:'서울'},
            {no:3, name:'강호동', age:20, addr:'서울'},
            {no:4, name:'강호동', age:20, addr:'서울'},
            {no:5, name:'강호동', age:20, addr:'서울'},
            {no:6, name:'강호동', age:20, addr:'서울'},
            {no:7, name:'강호동', age:20, addr:'서울'},
            {no:8, name:'강호동', age:20, addr:'서울'},
            {no:9, name:'강호동', age:20, addr:'서울'},
            {no:10, name:'강호동', age:20, addr:'서울'},
            {no:11, name:'강호동', age:20, addr:'서울'},
            {no:12, name:'강호동', age:20, addr:'서울'},
        ]
    }
    render() {
        const {data} = this.state
        return (
            <div style={{width:600,margin:30}}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Test5;