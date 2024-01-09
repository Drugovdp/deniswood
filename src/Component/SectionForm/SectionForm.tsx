import React, { useState } from 'react'

import './SectionForm.scss'

import { Form } from './Form/Form'
import { API_PATH } from '../../Constant/constant'

import cansel from '../../images/cancel.svg'
import { SuccesForm } from '../SuccesForm/SuccesForm'

export const SectionForm = () => {

    const [canselBlock, setCanselBlock] = useState(false)

    const onClickCancel = () => {
        setCanselBlock(!canselBlock)
    }

    return (
        <section id='consultation' className='sectionForm'>
            {canselBlock &&
                <SuccesForm callback={onClickCancel}/>
            }
            <div className="sectionFormWrapper">
                <div className="formTitle">
                    <h1>ПОЛУЧИ <span>ПЕРСОНАЛЬНУЮ</span> КОНСУЛЬТАЦИЮ</h1>
                </div>
                <Form api={API_PATH} canselBlock={canselBlock} setCanselBlock={setCanselBlock} email={true} />
                <div className='formText'>* - поле обязательное</div>
                <div className='formText'>Нажимая на кнопку, Вы принимаете <a href='#'>Положение</a> и <a href='#'>Согласие</a> на обработку персональных данных</div>
            </div>
        </section>
    )
}
