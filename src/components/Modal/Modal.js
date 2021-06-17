import {Component} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = (evt) =>{
    if(evt.code === 'Escape'){
        this.props.onClose();
    }
}

handleBackdropClick =evt =>{
    if(evt.target === evt.currentTarget){
        this.props.onClose();
    }
}

    render(){
        return createPortal(
            <div className={styles.Modal__backdrop}  onClick={this.handleBackdropClick}>
            <div className={styles.Modal__content} >{this.props.children}</div>
          </div>, modalRoot,
        )
    }
}