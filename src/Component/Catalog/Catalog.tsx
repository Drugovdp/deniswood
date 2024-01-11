import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Catalog.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { TypeCatalog, TypeUseTable, catalog } from '../../state/state'
import { Button } from '../Button/Button'
import { PopUpForm } from '../PopUpForm/PopUpForm';
import { SuccesForm } from '../SuccesForm/SuccesForm';
import { API_PATH } from '../../Constant/constant';

export const Catalog = () => {

  const [cards, setCards] = useState<TypeCatalog[]>([])

  const [filterCatalog, setFilterCatalog] = useState('all')

  useEffect(() => {
    if (filterCatalog === 'all') {
      setCards(catalog)
    } else {
      setCards(catalog.filter(el => el.use === filterCatalog))
    }
  }, [filterCatalog])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.currentTarget.value
    setFilterCatalog(filterValue)
  }

  const optionValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.currentTarget.value
    setFilterCatalog(filterValue)
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

  const cardsProdact = cards.map(el => {
    return (
      <div key={el.id} className="prodactItem">
        <div className="foto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            navigation
          >
            {el.imgFoto.map(f => {
              return (
                <SwiperSlide><img src={f} alt="" /></SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="name">{el.name}</div>
        {el.prise && <div className="prise">{el.prise}</div>}
        <div className="size">{el.size}</div>
        <div className="thickness">{el.thickness}</div>
        <Button className='btnCard' callBack={onClickOpenForm}>Хочу такой</Button>
      </div>
    )
  })

  const parentBlockRef = useRef<HTMLDivElement>(null);
  const childBlockRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const parentBlock = parentBlockRef.current;
      const childBlock = childBlockRef.current;

      const unsetStyleBlock = (parentBlock: HTMLDivElement) => {
        parentBlock.style.position = ''
        parentBlock.style.top = ''
        parentBlock.style.backgroundColor = ''
        parentBlock.style.padding = ''
        parentBlock.style.zIndex = ''
      }

      if (parentBlock && childBlock) {
        if (parentBlock.getBoundingClientRect().top <= 0) {
          parentBlock.style.position = 'sticky'
          parentBlock.style.top = '0'
          parentBlock.style.backgroundColor = '#142024'
          parentBlock.style.padding = '10px 0 10px 0'
          parentBlock.style.zIndex = '5'
        } else {
          unsetStyleBlock(parentBlock)
        }
        if ((childBlock.getBoundingClientRect().bottom - parentBlock.getBoundingClientRect().height) <= 0) {
          unsetStyleBlock(parentBlock)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='catalog'>
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
      <div className='catalogWrapper'>
        <div className='catalogWrapperHeader' ref={parentBlockRef}>
          <div className="catalogTitle">
            <h1>КАТАЛОГ <span>ИЗДЕЛИЙ</span></h1>
          </div>
          <div className='option'>
            <select name="optionFilter" onChange={optionValue}>
              <option value={'all'}>ВСЕ</option>
              <option value={'dinner'}>ОБЕДЕННЫЕ</option>
              <option value={'magazine'}>ЖУРНАЛЬНЫЕ</option>
              <option value={'workers'}>РАБОЧИЕ</option>
              <option value={'other'}>ДРУГОЕ</option>
            </select>
          </div>
          <div className="filterBlock">
            <div className="btnFilter">
              <input id='all' name='filter' type="radio" value={'all'} onChange={onChangeHandler} checked={filterCatalog === 'all' ? true : false} />
              <label htmlFor="all">ВСЕ</label>
            </div>
            <div className="btnFilter">
              <input id='dinner' name='filter' type="radio" value={'dinner'} onChange={onChangeHandler} checked={filterCatalog === 'dinner' ? true : false} />
              <label htmlFor="dinner">ОБЕДЕННЫЕ</label>
            </div>
            <div className="btnFilter">
              <input id='magazine' name='filter' type="radio" value={'magazine'} onChange={onChangeHandler} checked={filterCatalog === 'magazine' ? true : false} />
              <label htmlFor="magazine">ЖУРНАЛЬНЫЕ</label>
            </div>
            <div className="btnFilter">
              <input id='workers' name='filter' type="radio" value={'workers'} onChange={onChangeHandler} checked={filterCatalog === 'workers' ? true : false} />
              <label htmlFor="workers">РАБОЧИЕ</label>
            </div>
            <div className="btnFilter">
              <input id='other' name='filter' type="radio" value={'other'} onChange={onChangeHandler} checked={filterCatalog === 'other' ? true : false} />
              <label htmlFor="other">ДРУГОЕ</label>
            </div>
          </div>
        </div>
        <div className="prodact" ref={childBlockRef}>
          {cardsProdact}
        </div>
      </div>
    </section>
  )
}
