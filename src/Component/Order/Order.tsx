import React from 'react'

import './Order.scss'

import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.png'
import img10 from '../../images/10.png'

export const Order = () => {
  return (
    <section className='sectionOrder'>
      <div className="sectionOrderWrapper">
        <div className="orderTitle">
          <h1>Как <span>сделать</span> заказ?</h1>
        </div>
        <div className="cardInfo">
          <div className="item">
            <div className="itemNumber">1</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img1} alt="img2" /></div>
              <h3>Этап консультирования</h3>
            </div>
            <ul className='itemLists'>
              <li>Консультируем</li>
              <li>Предварительно рассчитываем стоимость</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">2</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img2} alt="img2" /></div>
              <h3>Разрабатываем дизайн</h3>
            </div>
            <ul className='itemLists'>
              <li>Подбор древесины, составление композиции столешницы</li>
              <li>Согласование формы столешницы и обработки края</li>
              <li>Проработка заливки (цвет, композиция, объекты)</li>
              <li>Выбор финишного покрытия</li>
              <li>Выбор подстолья</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">3</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img3} alt="img3" /></div>
              <h3>Составляем документы</h3>
            </div>
            <ul className='itemLists'>
              <li>Договор</li>
              <li>Спецификация</li>
              <li>Гарантийный талон</li>
              <li>Договор поставки</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">4</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img4} alt="img4" /></div>
              <h3>Получаем аванс</h3>
            </div>
            <ul className='itemLists'>
              <li>Аванс 60%</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">5</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img5} alt="img5" /></div>
              <h3>Начинаем творить</h3>
            </div>
            <ul className='itemLists'>
              <li>Важный этап - процесс изготовления</li>
            </ul>
          </div>

          <div className="item">
            <div className="itemNumber">6</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img6} alt="img6" /></div>
              <h3>Делаем вам фотоотчёт процесса изготовления</h3>
            </div>
            <ul className='itemLists'>
              <li>Работа по изготовлению изделия в столярной мастерской</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">7</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img7} alt="img7" /></div>
              <h3>Презентация изделия в мастерской</h3>
            </div>
            <ul className='itemLists'>
              <li>Приглашаем вас на предварительную приёмку</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">8</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img8} alt="img8" /></div>
              <h3>Получаем остаток</h3>
            </div>
            <ul className='itemLists'>
              <li>Аванс 40%</li>
            </ul>
          </div>
          <div className="item">
            <div className="itemNumber">9</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img9} alt="img9" /></div>
              <h3>Доставляем</h3>
            </div>
            <ul className='itemLists'>
              <li>Упаковываем в твердый короб</li>
              <li>Сдаем груз в ТК</li>
            </ul>
          </div>
          <div className="item result">
            <div className="itemNumber">10</div>
            <div className='itemTitle'>
              <div className='itemTitleImg'><img src={img10} alt="img10" /></div>
              <h3>Наслажаемся результатом</h3>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
