import React, { useRef } from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Button } from '../../Button/Button'

import './HeaderMain.scss'

import baner from '../../../images/banerHeader.png'
import decor from '../../../images/fonIcon.png'
import play from '../../../images/play.svg'
import fonBaneer from '../../../images/fonBaner.jpg'

type TypePropsHeaderMain = {
  cor: Array<number>
  mouseOut: boolean
}

export const HeaderMain: React.FC<TypePropsHeaderMain> = ({ cor, mouseOut }) => {

  const ref = useRef<HTMLDivElement>(null)

  if (ref.current !== null) {
    if (mouseOut) {
      ref.current.style.transform = `translate(${cor[0]}px, ${cor[1]}px)`
      ref.current.style.transition = `unset`
    } else {
      ref.current.style.transform = `translate(${cor[0]}px, ${cor[1]}px)`
      ref.current.style.transition = `transform 0.8s`
    }
  }

  return (
    <div className='headerMain'>
      <div className='headerMainContent'>
        <div className='title'>
          <h1>АВТОРСКИЙ СТИЛЬ</h1>
          <h1>ГАРАНТИЯ КАЧЕСТВА</h1>
        </div>
        <div className="btnBlock">
          <div className='itemBtn'>
            <Button className={'btnTable'} callBack={() => { }}>ХОЧУ СТОЛ</Button>
            <Button className={'btnCatalog'} callBack={() => { }}>СМОТРЕТЬ КАТАЛОГ</Button>
          </div>
          <div className="itemBtnVideo">
            <div className="itemBtnVideoBtn">
              <img src={play} alt="" />
              <div className='animBc'></div>
            </div>
            <div className='itemBtnVideoHeader'>
              <p>Посмотреть видео</p>
              <span>Wood Art</span>
            </div>
          </div>
        </div>
        <div className="discriptionBlock">
          <div className="itemDiscription">
            <div className='line'></div>
            <div className="text">
              Наши изделия сочетают в себе природную энергию и футуристичный дизайн
            </div>
          </div>
          <div className="itemDiscription">
            <div className='line'></div>
            <div className="text">
              Мастера нашей команды всегда работают над созданием эксклюзивных изделий
            </div>
          </div>
        </div>
      </div>
      {/* <div ref={ref} className='baner'>
        <img src={baner} alt="" />
        <div className='decor'>
          <img src={decor} alt="" />
        </div>
      </div> */}
    </div>
  )
}
