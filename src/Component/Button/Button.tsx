import React from 'react'

import './Button.scss'

type TypePropsButton = {
    className?: string
    children: React.ReactNode
    callBack: () => void
}

export const Button: React.FC<TypePropsButton> = ({ children, callBack, className }) => {

    const onClickHandler = () => {
        callBack()
    }

    const classNameBtn = `${'btn'} ${className ? className: ''}`

    return (
        <button className={classNameBtn} onClick={onClickHandler}>{children}</button>
    )
}
