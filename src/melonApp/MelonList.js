import React, { Component } from 'react';
import MelonItem from './MelonItem';
import './MelonList.css'

class MelonList extends Component {
    render() {
        const { datafilter, onUp, onOpen } = this.props 
        return (
            <div className="MelonList">
                 <table>
                     <caption>멜론</caption>
                     <colgroup>
                        <col  className="w1" />
                        <col  className="w2" />
                        <col  className="w3" />
                        <col  className="w4" />
                        <col  className="w5" />
                        <col  className="w6" />
                     </colgroup>
                     <thead>
                         <tr>
                             <th>순위</th>
                             <th>곡정보</th>
                             <th>앨범</th>
                             <th>좋아요</th>
                             <th>무비</th>
                             <th>상승/하락</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             datafilter.map( item => <MelonItem 
                                                     key={item.rank} 
                                                     item ={ item }
                                                     onUp = {onUp}
                                                     onOpen = {onOpen}
                                                     />)
                         }
                     </tbody>
                 </table>               
            </div>
        );
    }
}

export default MelonList;