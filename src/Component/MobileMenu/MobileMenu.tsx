import { useState } from 'react'
import './MobileMenu.scss'
import { mobilemenu } from '../../state/state'

export const MobileMenu = () => {

    const [elMobileMenus, setElMobileMenus] = useState(mobilemenu)
    const [activItem, setActivItem] = useState(0)

    const mobileElement = elMobileMenus.map((el, i) => {

        const onClickHandler = () => {
            setActivItem(i)
        }

        return (
            <div key={el.id} className='mobileMenuBoxItem' onClick={onClickHandler}>
                <svg className={i === activItem ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" >
                    <path d={el.icon} strokeWidth="0.5" />
                </svg>
                <a href='#' className={i === activItem ? 'mobileMenuBoxItemText active' : 'mobileMenuBoxItemText'}>{el.itemMenu}</a>
            </div>
        )
    })

    return (
        <div className='mobileMenu'>
            <div className='mobileMenuBox'>
                {mobileElement}
            </div>
        </div>
    )
}
