import React, { useEffect, useRef, useState } from 'react'
import { TypeAccordionData } from '../../../state/state'

import './Accordion.scss'

export const Accordion: React.FC<TypeAccordionData> = ({ id, title, content }) => {

    const [isActive, setIsActive] = useState(false);

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = 'rotate(0deg)'
            if (isActive) {
                ref.current.style.transform = 'rotate(-45deg)'
                ref.current.style.transition = 'transform 0.2s ease-in'
            }
        }
    }, [isActive])

    const onClickHandler = (itemID: string) => {
        setIsActive(!isActive)
    }

    return (
        <div key={id} className="accordionItem">
            <div className="accordionItemTitle" onClick={() => onClickHandler(id)}>
                <div>{title}</div>
                <div ref={ref}>+</div>
            </div>
            {!isActive ? <div style={{ maxHeight: '0px' }} className="accordionItemContent">{content}</div> : <div style={{ maxHeight: '205px' }} className="accordionItemContent">{content}</div>}
        </div>
    )
}
