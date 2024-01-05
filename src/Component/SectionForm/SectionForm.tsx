import React, { useState } from 'react'
import axios from 'axios'

import './SectionForm.scss'

import { Form } from './Form/Form'

export const SectionForm = () => {

    const API_PATH = 'http://testemail/index.php'

    return (
        <section className='sectionForm'>
            <div className="sectionFormWrapper">
                <div className="formTitle">
                    <h1>ПОЛУЧИ <span>ПЕРСОНАЛЬНУЮ</span> КОНСУЛЬТАЦИЮ</h1>
                </div>
                <Form api={API_PATH} />
                <div className='formText'>Нажимая на кнопку, Вы принимаете <a href='#'>Положение</a> и <a href='#'>Согласие</a> на обработку персональных данных</div>
            </div>
        </section>
    )
}
