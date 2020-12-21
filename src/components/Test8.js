import React, { Component } from 'react';
import styled, {css} from 'styled-components'

class Test8 extends Component {
    render() {
        return (
            <div>
                <Container bg>
                    <Box width="100px" color="#fff">확인</Box>
                    <Box width="100px" margin bg="pink">확인</Box>
                    <Box width="100px" padding bg="lime">확인</Box>
                    <Box width="100px" color="red">확인</Box>
                    <Box width="100px" abc>확인abc</Box>
                </Container>
                
            </div>
        );
    }
}

export default Test8;

const Container = styled.section `
    padding:30px; 
    border:1px solid #333;
    margin:10px;
    background:${props => props.bg && 'yellow'};
    background: ${props => props.bg || 'skyblue'}

`
const Box = styled.button `
    height:50px;
    margin:10px;
    width : ${props => props.width};
    margin-right : ${props => props.margin ? '40px' : '10'};
    padding : ${props => props.padding ? '5px' : '0'};
    background : ${props => props.bg ? props.bg : '#dcdcdc'};
    color : ${props => props.color ? props.color :'#000'};
    ${props => props.abc && css `
        background:skyblue;
        cursor:pointer;
        transition:0.4s;
        color:#fff;
        width:300px;
        height:100px;
        border:1px solid #dcdcdc;
        &:hover {
            background: pink;
            color:#000;
        }
    `}
`