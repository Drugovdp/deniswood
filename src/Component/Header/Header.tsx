import { MouseEvent, useState } from 'react'
import { HeaderMain } from './HeaderMain/HeaderMain'
import { HeaderNav } from './HeaderNav/HeaderNav'

import './Header.scss'

export const Header = () => {

  const [cor, setCor] = useState([0, 0])
  const [mouseOut, setMouseOut] = useState(false)

  const mouseMoveHandler = (e: MouseEvent<HTMLElement>) => {
    let x = e.clientX / window.innerWidth * 50
    let y = e.clientY / window.innerWidth * 50
    setCor([x, y])
  }

  const mouseOverHandler = (e: MouseEvent<HTMLElement>) => {
    setMouseOut(true)
  }

  const mouseOutHandler = (e: MouseEvent<HTMLElement>) => {
    setMouseOut(false)
    setCor([0, 0])
  }

  const cancelMouseEvent = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <header
      onMouseMove={window.innerWidth > 800 ? mouseMoveHandler : cancelMouseEvent}
      onMouseOut={window.innerWidth > 800 ? mouseOutHandler : cancelMouseEvent}
      onMouseOver={window.innerWidth > 800 ? mouseOverHandler : cancelMouseEvent}
    >
      <HeaderNav />
      <HeaderMain cor={cor} mouseOut={mouseOut} />
    </header>
  )
}
