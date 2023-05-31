import React from 'react'
import Image from 'next/image'
import BackF from "../../assets/images/background-header.jpg"
const AboutUs = () => {
  return (
    <>
      <section className='AboutUs-section'>
        <div className="container">
          <div className='AboutUs-section-wrapper'>
          <div className='AboutUs-section-box'>
            <h2 className='AboutUs-section-title'>О НАС</h2>
            <h3 className='AboutUs-section-subtitle'>Команда лучших экспертов</h3>
            <p className='AboutUs-section-desc'>Это текст. Вы можете перетащить его в любое место на странице. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Здесь будет удачно смотреться текст о вашей компании и услугах.</p>
            <p className='AboutUs-section-desc'>Это текст. Вы можете перетащить его в любое место на странице. Нажмите один раз и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Здесь будет удачно смотреться текст о вашей компании и услугах.</p>
            </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
