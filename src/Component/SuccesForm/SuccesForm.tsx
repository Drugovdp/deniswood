import React from 'react'

import './SuccesForm.scss'

import cansel from '../../images/cancel.svg'
import gal from '../../images/gal.png'

type TypeSuccesForm = {
    callback: () => void
}

export const SuccesForm: React.FC<TypeSuccesForm> = ({callback}) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <div className='succesBlockWrapper'>
            <div className="succesBlock">
                <div className="close" onClick={onClickHandler}>
                    <img src={cansel} alt="cansel" />
                </div>
                <div className="textSucces">
                    <img src={gal} alt="gal" />
                    <h3>Ваша заявка отправлена</h3>
                    <p>Свяжемся с вами в ближайшее время</p>
                </div>
            </div>
        </div>
    )
}
