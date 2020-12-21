import React, { Component } from 'react';
import Data from '../utils/api/data.json';
import cat0 from '../utils/images/cat0.jpg';
import cat1 from '../utils/images/cat1.jpg';
import bg from '../utils/images/bg.jpg';

class Test4 extends Component {
    state = {
        data : Data //외부 파일 끌어다가 쓸수있다 import Data
    }
    render() {
        const style1 = {width:400, height:200, background:'pink'}
        return (
            <div>
                <div style={style1}></div>
                <img src={cat1} alt/>
                <img src={cat0} alt/>
                {/* jsx안에서 상대경로 안됨 */}
                <img src="../utiles/images/cat4.jpg" alt=""/>
                <img src="/img/m0.jpg" alt=""/>
                <img src="/img/m1.jpg" alt=""/>
                <div style={{
                    width:'100%',
                    height:700,
                    backgroundPosition:'0 0',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundImage:('url('+bg+')')                  
                }}></div>
            </div>
        );
    }
}
export default Test4;