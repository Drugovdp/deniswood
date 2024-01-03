import React, { ChangeEvent } from 'react'

import './Input.scss'

type TypePropsInput = {
    value: string
    placeholder: string
    classNames: string
    onChangeValueHandler: (value: string) => void
    onFocusNameHandler?: (e: React.FocusEvent<HTMLElement>) => void
}

export const Input: React.FC<TypePropsInput> = ({ value, placeholder, classNames, onChangeValueHandler, onFocusNameHandler }) => {

    return (
        <input
            type="text"
            className={classNames}
            placeholder={placeholder}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValueHandler(e.currentTarget.value)}
            onFocus={onFocusNameHandler}
        />
    )
}
