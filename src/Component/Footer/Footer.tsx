import React, { useState } from 'react'
import axios from 'axios'

import './Footer.scss'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import vector from '../../images/Group.png'

export const Footer = () => {

    const API_PATH = 'http://testemail/index.php'

    const [valueName, setValueName] = useState('')
    const [valueTel, setValueTel] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        tel: ''
    })

    const onFocusNameHandler = (e: React.FocusEvent<HTMLElement>) => {
        if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.textContent = ''
    }

    const onChangeNameHandler = (value: string) => {
        const re = /^[A-zА-яЁё]{0,10}$/
        if (re.test(valueName)) {
            setValueName(value.trim())
        }
    }

    const onChangeTelHandler = (value: string) => {
        const re = /^\d{1,11}$/
        if (re.test(value)) {
            setValueTel(value.replace(/^[0-9]/, '8'))
        }
    }

    const onClickHandler = () => {

        let countError = 0

        if (valueName) {
            formData.name = valueName
        } else {
            const span = document.querySelectorAll('.inputFeedBack')[0].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        }

        if (valueTel === '') {
            const span = document.querySelectorAll('.inputFeedBack')[2].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        } else {
            formData.tel = valueTel
        }

        if (countError === 0) {

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: JSON.stringify(formData)
            })
                .then(result => console.log(result.config.data))
                .catch(error => console.log('error'))

            setFormData({
                name: '',
                tel: ''
            })
            setValueName('')
            setValueTel('')
        }
    }

    return (
        <footer className='footer'>
            <hr />
            <div className="footerWrapper">
                <div className="footerTitle">
                    <h1>Свяжитесь с <span>нами</span></h1>
                </div>
                <div className="desktopContent">
                    <div className="desktopContentAdress">
                        <a href="tel:+7 950 205-00-84">+7 950 205-00-84</a>
                        <a href="https://wa.me/79502050084?text=Здравствуйте! Меня интересует...">What'sApp</a>
                        <a href="#">Telegram</a>
                        <div className="mailingAddress">г.Екатеринбург ул.Восточная 2</div>
                    </div>
                    <div className="desktopContentForms">
                        <h4>Получите персональную консультацию</h4>
                        <label htmlFor="name">
                            <Input
                                value={valueName}
                                classNames={'inputFeedBack'}
                                placeholder={'Введите имя'}
                                onChangeValueHandler={(value) => onChangeNameHandler(value)}
                                onFocusNameHandler={(e) => onFocusNameHandler(e)}
                            />
                            <span></span>
                        </label>
                        <label htmlFor="tel">
                            <Input
                                value={valueTel}
                                classNames={'inputFeedBack'}
                                placeholder={'89999876543'}
                                onChangeValueHandler={(value) => onChangeTelHandler(value)}
                                onFocusNameHandler={onFocusNameHandler}
                            />
                            <span></span>
                        </label>
                        <Button className='btnForm' callBack={onClickHandler}>Оставить заявку</Button>
                        <div className="formText">Нажимая на кнопку, Вы принимаете <a href="#">Положение</a> и <a href="#">Согласие</a> на обработку персональных данных</div>
                    </div>
                </div>
                <div className="privacyPolicy">
                    © 2021-2023. Resin wood.<br></br> Копирование материалов сайта запрещено
                </div>
            </div>
            <div className='patterns'><img src={vector} alt="vector" /></div>
        </footer>
    )
}
