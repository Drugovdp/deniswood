import React, { useState } from 'react'
import axios from 'axios'

import './Footer.scss'

import { API_PATH } from '../../Constant/constant'

import vector from '../../images/Group.png'
import { SuccesForm } from '../SuccesForm/SuccesForm'
import { Form } from '../SectionForm/Form/Form'

export const Footer = () => {

    const [canselBlock, setCanselBlock] = useState(false)

    const onClickCancel = () => {
        setCanselBlock(!canselBlock)
    }

    return (
        <footer className='footer'>
            {canselBlock &&
                <SuccesForm callback={onClickCancel}/>
            }
            <hr />
            <div className="footerWrapper">
                <div className="footerTitle">
                    <h1>Свяжитесь с <span>нами</span></h1>
                </div>
                <div className="desktopContent">
                    <div className="desktopContentAdress">
                        <a href="tel:+7 950 205-00-84">+7 950 205-00-84</a>
                        <a href="https://wa.me/79502050084?text=Здравствуйте! Меня интересует...">What'sApp</a>
                        <a href="https://t.me/+dhyYkLO29uw3Zjhi">Telegram</a>
                        <div className="mailingAddress">г.Екатеринбург ул.Восточная 2</div>
                    </div>
                    <div className="desktopContentForms">
                        <h4>Получите персональную консультацию</h4>
                        <Form api={API_PATH} canselBlock={canselBlock} setCanselBlock={setCanselBlock} email={false} />
                        <div className='formText'>* - поле обязательное</div>
                        <div className="formText">Нажимая на кнопку, Вы принимаете <a href="#">Положение</a> и <a href="#">Согласие</a> на обработку персональных данных</div>
                    </div>
                </div>
                <div className="privacyPolicy">
                    © 2024. Wood Art.<br></br> Копирование материалов сайта запрещено
                </div>
            </div>
            <div className='patterns'><img src={vector} alt="vector" /></div>
        </footer>
    )
}
