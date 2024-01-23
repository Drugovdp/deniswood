import React from 'react'

import './CloseButton.scss'

import canselWhite from '../../images/cancelWhite.svg'
import canselBlue from '../../images/cancel.svg'

type TypeCloseBlock = {
    color: boolean
    callBack: () => void
}

export const CloseButton: React.FC<TypeCloseBlock> = ({color, callBack}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <div className="close" onClick={onClickHandler}>
            <img src={color ? canselWhite: canselBlue} alt="cansel" />
            <p>Закрыть</p>
        </div>
    )
}
