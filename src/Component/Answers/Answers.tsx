import React, { useEffect, useRef, useState } from 'react'

import { accordionData } from '../../state/state'

import './Answers.scss'
import { Accordion } from './Accordion/Accordion';

export const Answers = () => {  

    return (
        <section id='question' className='sectionAnswers'>
            <div className="sectionAnswersWrapper">
                <div className="answersTitle">
                    <h1><span>Ответы</span> на вопросы</h1>
                </div>
                <div className="accordion">
                    {
                        accordionData.map(el => {
                            return (
                                <Accordion key={el.id} id={el.id} title={el.title} content={el.content}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
