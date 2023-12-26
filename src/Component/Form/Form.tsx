import React from 'react'

import './Form.scss'

export const Form = () => {
  return (
    <section className='sectionForm'>
        <div className="sectionFormWrapper">
            <div className="formTitle">
                <h1>ПОЛУЧИ <span>ПЕРСОНАЛЬНУЮ</span> КОНСУЛЬТАЦИЮ</h1>
                <div className="form">
                    <label htmlFor="name">
                        <input id='name' type="text" />
                    </label>
                    <label htmlFor="tel">
                        <input id='tel' type="text" />
                    </label>
                </div>
            </div>
        </div>
    </section>
  )
}
