import React from 'react'

import './Form.scss'
import { Button } from '../Button/Button'

export const Form = () => {
  return (
    <section className='sectionForm'>
        <div className="sectionFormWrapper">
            <div className="formTitle">
                <h1>ПОЛУЧИ <span>ПЕРСОНАЛЬНУЮ</span> КОНСУЛЬТАЦИЮ</h1>
                <div className="form">
                    <label htmlFor="name">
                        <p>Ваше Имя</p>
                        <input id='name' type="text" placeholder='Ваше имя'/>
                    </label>
                    <label htmlFor="tel">
                        <p>Укажите номер телефона</p>
                        <input id='tel' type="text"  placeholder='Номер телефона'/>
                    </label>
                    <Button className='btnForm' callBack={()=>{}}>Отправить</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
