import { useState } from 'react'

import './HeaderNav.scss'

import { ButtonContacts } from '../../ButtonContacts/ButtonContacts'

import decor from '../../../images/fonIcon.png'
import logo from '../../../images/Layer_1.png'

export const HeaderNav = () => {

  return (
    <nav className='nav'>
      <div className="navWrapper">
        <div className="navWrapperLogo">
          <img src={logo} alt="" />
          <div className='decor'>
            <img src={decor} alt="" />
          </div>
        </div>
        <ul className="navWrapperNav">
          <li><a href="#">Столы</a></li>
          <li><a href="#">Консультация</a></li>
          <li><a href="#">Вопросы</a></li>
          <li><ButtonContacts /></li>
        </ul>
        <div className="mobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
