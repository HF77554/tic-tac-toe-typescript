import React from 'react'
import ReactDOM from 'react-dom';
import './modal.css'


type Props = {
    onGameOver: boolean;
    children:string;
    onModalClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const Modal: React.FC<Props> = ({onGameOver,onModalClose, children}) => {
    if (!onGameOver) return null
    return ReactDOM.createPortal(
        <>
            <div className='overlay_styles' />
            <div className='modal_styles'>
                {children}
                <button onClick={onModalClose}>Close Modal</button>
            </div>
        </>,
        document.getElementById('#portal')!
    )
}

export default Modal