import React, { Component } from 'react';
import styled from 'styled-components'
class Test7 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Box>방감삽</Box>
                    <Box1>안녕하셈</Box1>
                    <Button>학인</Button>
                </Container>
            </div>
        );
    }
}

export default Test7;
//const 컴포넌트형식이름 = styled.요소명  `   `;
const Container = styled.div` 
    width:300px; border:1px solid #333; padding:20px; margin:10px;
`
const Box = styled.article`
    color:red; font-size:20px; background:pink; margin:10px;
`
const Box1 = styled.article `
    color:brown;
`
const Button = styled.button `
    padding:15px 40px; border:none; transition: 0.8s;
    &:hover {
        background:gold;
    }
`