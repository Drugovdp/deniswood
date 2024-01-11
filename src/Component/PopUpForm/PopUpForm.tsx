import React from 'react'

import './PopUpForm.scss'
import { CloseButton } from '../CloseButton/CloseButton'
import { Form } from '../SectionForm/Form/Form'

type TypePopUpForm = {
    api: string
    changeBlock: boolean
    onClickOpenForm: () => void
    onClickChange: () => void
}

export const PopUpForm: React.FC<TypePopUpForm> = ({api, changeBlock, onClickOpenForm,  onClickChange}) => {

    return (
        <div className='popUpForm'>
            <div className="popUpFormWrapper">
                <CloseButton color={true} callBack={onClickOpenForm} />
                <h3>Отправте заявку</h3>
                <h3>Свяжемся с вами в ближайшее время</h3>
                <Form api={api} email={true} canselBlock={changeBlock} setCanselBlock={onClickChange} />
                <div className='formText'>* - поле обязательное</div>
                <div className="formText">Нажимая на кнопку, Вы принимаете <a href="#">Положение</a> и <a href="#">Согласие</a> на обработку персональных данных</div>
            </div>
        </div>
    )
}
