import React, { Component } from 'react';
import './MelonModal.css'
import {AiFillCloseCircle} from 'react-icons/ai';

class MelonModal extends Component {
    render() {
        const {onClose,findData} = this.props
        return (
            <div className="Modal">
                <div className="bg" onClick={onClose}></div>
                <div className="popup">
                    <h2>노래명:{findData.title}</h2>
                    <div>
                    <iframe src={"https://www.youtube.com/embed/"+findData.key} frameborder="0" ></iframe>
                    </div>
                    <h3>가수명:{findData.singer}</h3>
                    <p className="close" onClick={onClose}>
                            <AiFillCloseCircle />
                    </p>
                </div>
            </div>
        );
    }
}

export default MelonModal;