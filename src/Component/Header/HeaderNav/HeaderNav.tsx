import { useState } from 'react'

import './HeaderNav.scss'

import decor from '../../../images/fonIcon.png'

export const HeaderNav = () => {

  return (
    <nav className='nav'>
      <div className="navWrapper">
        <div className="navWrapperLogo">
          <img src="https://static.tildacdn.com/tild3331-6232-4365-b636-663461333864/logo_RW.svg" alt="" />
          <div className='decor'>
            <img src={decor} alt="" />
          </div>
        </div>
        <ul className="navWrapperNav">
          <li><a href="">Стиль</a></li>
          <li><a href="">Столы</a></li>
          <li><a href="">Консультация</a></li>
          <li><a href="">Отзывы</a></li>
          <li><a href="">Вопросы</a></li>
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
