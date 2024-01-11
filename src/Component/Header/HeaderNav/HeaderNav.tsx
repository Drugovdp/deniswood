import { useEffect, useRef, useState } from 'react'

import './HeaderNav.scss'

import { ButtonContacts } from '../../ButtonContacts/ButtonContacts'

import decor from '../../../images/fonIcon.png'
import logo from '../../../images/Layer_1.png'
import cansel from '../../../images/cancelWhite.svg'
import logoWhite from '../../../images/logoWhite.jpg'
import { CloseButton } from '../../CloseButton/CloseButton'

export const HeaderNav = () => {

  const screenWidth = window.screen.width

  const ref = useRef<HTMLDivElement>(null)

  const [canselBlock, setCanselBlock] = useState(false)

  useEffect(() => {
    if (!canselBlock) {
      if (ref.current) {
        ref.current.style.display = `block`
        ref.current.style.right = `-${screenWidth}px`
        ref.current.style.transition = `unset`
      }
    } else {
      if (ref.current) {
        ref.current.style.display = `block`
        ref.current.style.right = `0px`
        ref.current.style.transition = `right 0.3s ease`
      }
    }
  }, [canselBlock])

  const onClickCancel = () => {
    setCanselBlock(!canselBlock)
  }

  const onClickHandlerOpen = () => {
    setCanselBlock(!canselBlock)
  }

  console.log(canselBlock)

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
          <li><a href="#catalog">Столы</a></li>
          <li><a href="#consultation">Консультация</a></li>
          <li><a href="#question">Вопросы</a></li>
          <li><ButtonContacts blue={true} /></li>
        </ul>
        <div className="mobileMenu" onClick={onClickHandlerOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div ref={ref} className='mobileMenuNav'>
        <CloseButton color={true} callBack={onClickCancel} />
        <div className='navMobileWrapper'>
          <ul className="navMobile">
            <li onClick={onClickCancel}><a href="#catalog">Столы</a></li>
            <li onClick={onClickCancel}><a href="#consultation">Консультация</a></li>
            <li onClick={onClickCancel}><a href="#question">Вопросы</a></li>
            <li onClick={onClickCancel}><a href="#question">Контакты</a></li>
            <li><ButtonContacts blue={false} /></li>
            <div className='logoNav'><img src={logoWhite} alt="logoWhite" /></div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
