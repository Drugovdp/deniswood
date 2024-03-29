import React, { useState } from 'react'
import axios from 'axios'

import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'

import './Form.scss'

import animeLoadProgress from '../../../images/anime.gif'

type TypeForm = {
    api: string
    nameCard?: string
    email: boolean
    canselBlock: boolean
    setCanselBlock: (canselBlock: boolean) => void
}

export const Form: React.FC<TypeForm> = ({ api, nameCard, email, canselBlock, setCanselBlock }) => {

    const [loadProgress, setLoadProgress] = useState(false)
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valueTel, setValueTel] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        nameCardInfo: ''
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

    const onChangeEmailHandler = (value: string) => {
        setValueEmail(value.trim())
    }

    const onChangeTelHandler = (value: string) => {
        const re = /^\d{1,11}$/
        if (re.test(value)) {
            setValueTel(value.replace(/^[0-9]/, '8'))
        }
    }

    const loadProgresBlock = () => {
        setLoadProgress(!loadProgress)
    }

    const succes = () => {
        setLoadProgress(loadProgress)
        setCanselBlock(!canselBlock)
    }

    const onClickHandler = () => {

        let countError = 0

        if (valueName) {
            formData.name = valueName
        } else {
            const span = document.querySelectorAll('.inputFeedBack')[0].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        }

        if (valueEmail) {
            const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
            if (!re.test(valueEmail)) {
                const span = document.querySelectorAll('.inputFeedBack')[1].nextSibling
                if (span) span.textContent = 'Некоректный адрес'; countError++
            }
        }

        if (valueEmail) {
            formData.email = valueEmail
        }

        if (valueTel === '') {
            const span = document.querySelectorAll('.inputFeedBack')[2].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        } else {
            formData.tel = valueTel
        }

        if (nameCard) {
            formData.nameCardInfo = nameCard
        }

        if (countError === 0) {
            axios.post(api, JSON.stringify(formData), {
                onUploadProgress: loadProgresBlock,
                headers: { 'content-type': 'application/json' }
            })
                .then(result => succes())
                .catch(error => console.log(error))

            setFormData({
                name: '',
                email: '',
                tel: '',
                nameCardInfo: ''
            })

            setValueName('')
            setValueEmail('')
            setValueTel('')
        }
    }

    return (
        <div className="form">
            {loadProgress && <div className="loadProgress">
                <img src={animeLoadProgress} alt="animeLoadProgress" />
            </div>}
            <label htmlFor="name">
                <p>Ваше Имя*</p>
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
                <p>Укажите номер телефона*</p>
                <Input
                    value={valueTel}
                    classNames={'inputFeedBack'}
                    placeholder={'89999876543'}
                    onChangeValueHandler={(value) => onChangeTelHandler(value)}
                    onFocusNameHandler={onFocusNameHandler}
                />
                <span></span>
            </label>
            {email &&
                <label htmlFor="email">
                    <p>Укажите почту</p>
                    <Input
                        value={valueEmail}
                        classNames={'inputFeedBack'}
                        placeholder={'mail@mail.ru'}
                        onChangeValueHandler={(value) => onChangeEmailHandler(value)}
                    />
                    <span></span>
                </label>
            }
            <Button className='btnForm' callBack={onClickHandler}>Отправить</Button>
        </div>
    )
}
