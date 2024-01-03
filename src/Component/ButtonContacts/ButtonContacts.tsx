import React from 'react'

import './ButtonContacts.scss'

import whatsApp from '../../images/whatsapp.svg'
import telephone from '../../images/telephone.svg'

export const ButtonContacts = () => {
    return (
        <div className='btnContacts'>
            <a className='btnContactsWhatsApp' href="https://wa.me/79502050084?text=Здравствуйте! Меня интересует...">
                <img src={whatsApp} alt="whatsApp" />
            </a>
            <a className="btnContactsTel" href="tel:+79502050084" target="_blank">
                <img src={telephone} alt="" />
            </a>
        </div>
    )
}
