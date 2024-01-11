import React, { useRef, useState } from 'react'

import './HeaderMain.scss'

import { Button } from '../../Button/Button'

import play from '../../../images/play.svg'

import { API_PATH } from '../../../Constant/constant'
import { SuccesForm } from '../../SuccesForm/SuccesForm'
import { PopUpForm } from '../../PopUpForm/PopUpForm'

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

  const [changeBlock, setChangeBlock] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  const onClickChange = () => {
    setChangeBlock(!changeBlock)
  }

  const onClickOpenForm = () => {
    setOpenForm(!openForm)
    setChangeBlock(false)
  }

  return (
    <div className='headerMain'>
      {openForm
        ?
        !changeBlock
          ?
          <PopUpForm api={API_PATH} changeBlock={changeBlock} onClickOpenForm={onClickOpenForm} onClickChange={onClickChange} />
          :
          <SuccesForm callback={onClickOpenForm} />
        :
        ''
      }
      <div className='headerMainContent'>
        <div className='title'>
          <h1>АВТОРСКИЙ СТИЛЬ</h1>
          <h1>ГАРАНТИЯ КАЧЕСТВА</h1>
        </div>
        <div className="btnBlock">
          <div className='itemBtn'>
            <Button className={'btnTable'} callBack={onClickOpenForm}>ХОЧУ СТОЛ</Button>
            <div className="btnCatalog"><a href="#catalog">СМОТРЕТЬ КАТАЛОГ</a></div>
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
    </div>
  )
}
