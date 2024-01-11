import React from 'react'

import './SuccesForm.scss'

import cansel from '../../images/cancel.svg'
import gal from '../../images/gal.png'
import { CloseButton } from '../CloseButton/CloseButton'

type TypeSuccesForm = {
    callback: () => void
}

export const SuccesForm: React.FC<TypeSuccesForm> = ({ callback }) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <div className='succesBlockWrapper'>
            <div className="succesBlock">
                <CloseButton color={false} callBack={onClickHandler} />
                <div className="textSucces">
                    <img src={gal} alt="gal" />
                    <h3>Ваша заявка отправлена</h3>
                    <p>Свяжемся с вами в ближайшее время</p>
                </div>
            </div>
        </div>
    )
}
