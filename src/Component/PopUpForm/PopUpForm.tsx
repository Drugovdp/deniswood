import React from 'react'

import './PopUpForm.scss'

import { CloseButton } from '../CloseButton/CloseButton'
import { Form } from '../SectionForm/Form/Form'
import { VideoSlider } from '../VideoSlider/VideoSlider'

type TypePopUpForm = {
    api: string
    nameCard?: string
    changeBlock: boolean
    valueNameForm?: boolean
    onClickCloseForm: () => void
    onClickChange: () => void
}

export const PopUpForm: React.FC<TypePopUpForm> = ({ api, nameCard, changeBlock, valueNameForm, onClickCloseForm, onClickChange }) => {



    return (
        <div className='popUpForm'>
            <div className="popUpFormWrapper">
                <CloseButton color={true} callBack={onClickCloseForm} />
                {valueNameForm
                    ?
                    <>
                        <h3>Отправте заявку</h3>
                        <h3>Свяжемся с вами в ближайшее время</h3>
                        <Form api={api} nameCard={nameCard} email={false} canselBlock={changeBlock} setCanselBlock={onClickChange} />
                        <div className='formText'>* - поле обязательное</div>
                        <div className="formText">Нажимая на кнопку, Вы принимаете <a href="#">Положение</a> и <a href="#">Согласие</a> на обработку персональных данных</div>
                    </>
                    :
                    <VideoSlider />
                }
            </div>
        </div>
    )
}
