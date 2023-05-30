import React from 'react'

const Facts = () => {
  return (
    <>
      <section className='Facts-section'>
        <div className="container">
          <h2 className='Facts-section-title'>Наша компания: цифры и факты</h2>
          <ul className="Facts-section-list">
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">15</h3>
              <p className='Facts-section-item-subtitle'>лет опыта</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">36</h3>
              <p className='Facts-section-item-subtitle'>экспертов</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">120</h3>
              <p className='Facts-section-item-subtitle'>клиентов ежегодно</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">9</h3>
              <p className='Facts-section-item-subtitle'>партнеров</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Facts
