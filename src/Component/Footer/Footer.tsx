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
                        <div className="mailingAddress">г.Екатеринбург ул.Восточная 5б</div>
                    </div>
                    <div className="desktopContentForms">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c58daa199358e909790f3128ac013e20b9d13fe142797337830a9154977ca59&amp;source=constructor" width="100%" height="400"></iframe>
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
