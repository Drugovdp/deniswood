import React from 'react'

import './ButtonContacts.scss'

import whatsApp from '../../images/whatsapp.svg'
import whatsAppWhite from '../../images/whatsappWhite.svg'
import telephone from '../../images/telephone.svg'
import telephoneWhite from '../../images/telephoneWhite.svg'

type TypeButtonContacts = {
    blue: boolean
}

export const ButtonContacts: React.FC<TypeButtonContacts> = ({blue}) => {
    return (
        <div className='btnContacts'>
            <a className='btnContactsWhatsApp' href="https://wa.me/79502050084?text=Здравствуйте! Меня интересует...">
                <img src={blue ? whatsApp : whatsAppWhite} alt="whatsApp" />
            </a>
            <a className="btnContactsTel" href="tel:+79502050084" target="_blank">
                <img src={blue ? telephone : telephoneWhite} alt="" />
            </a>
        </div>
    )
}
