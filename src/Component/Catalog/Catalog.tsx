import React, { MouseEvent, useState } from 'react'

import './Catalog.scss'

import { catalog } from '../../state/state'
import { Button } from '../Button/Button'

export const Catalog = () => {

  const [cards, setCards] = useState(catalog)

  const changeFotoCards = (e: MouseEvent<HTMLElement>, elId: string) => {
    setCards(cards.map(el => el.id === elId ? { ...el, imgFoto: [el.imgFoto[0], el.imgFoto[1]] = [el.imgFoto[1], el.imgFoto[0]]} : el))
  }

  const cardsProdact = cards.map(el => {
    return (
      <div key={el.id} className="prodactItem">
        <div className="foto"
          onMouseOver={(e: MouseEvent<HTMLElement>) => changeFotoCards(e, el.id)}
          onMouseOut={(e: MouseEvent<HTMLElement>) => changeFotoCards(e, el.id)}
        >
          <img src={el.imgFoto[0]} alt="" />
        </div>
        <div className="name">{el.name}</div>
        <div className="prise">{el.prise}</div>
        <div className="size">{el.size}</div>
        <div className="thickness">{el.thickness}</div>
        <Button className='btnCard' callBack={() => { }}>Заказать</Button>
      </div>
    )
  })

  return (
    <section className='sectionCatalog'>
      <div className='sectionCatalogWrapper'>
        <div className="catalogTitle">
          <h1>КАТАЛОГ <span>ИЗДЕЛИЙ</span></h1>
        </div>
        <select className='filterBlockChange'>
          <option value={'all'}>ВСЕ</option>
          <option value={'dinner'}>ОБЕДЕННЫЕ</option>
          <option value={'magazine'}>ЖУРНАЛЬНЫЕ</option>
          <option value={'workers'}>РАБОЧИЕ</option>
          <option value={'other'}>ДРУГОЕ</option>
        </select>
        <div className="filterBlock">
          <div className="filterBlockAll">ВСЕ</div>
          <div className="filterBlockLunch">ОБЕДЕННЫЕ</div>
          <div className="filterBlockMagazine">ЖУРНАЛЬНЫЕ</div>
          <div className="filterBlockWorkers">РАБОЧИЕ</div>
          <div className="filterBlockOther">ДРУГОЕ</div>
        </div>
        <div className="prodact">
          {cardsProdact}
        </div>
      </div>
    </section>
  )
}
