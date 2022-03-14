import React from 'react'
import ReactDOM from 'react-dom';
import './modal.css'


type Props = {
    onGameWin: string;
    onModalClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const Modal: React.FC<Props> = ({onGameWin, onModalClose}) => {
    if (!onGameWin) return null
    return ReactDOM.createPortal(
        <>
            <div className='overlay_styles' />
            
            <div className='modal_styles'>
                {onGameWin}
                <div className='modal_close' onClick={onModalClose}>
                    X
                </div>
            </div>
        </>,
        document.getElementById('portal')!
    )
}

export default Modal