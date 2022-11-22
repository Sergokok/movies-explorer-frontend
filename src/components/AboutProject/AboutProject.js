import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__stages'>
        <div className='about-project__stage'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__stage'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
        <div className='about-project__columns'>
          <div className='about-project__backend'>
            <div className='about-project__times about-project__back'>1 неделя</div>
            <span className='about-project__times-label'>Back-end</span>
          </div>
          <div className='about-project__frontend'>
          <div className='about-project__times about-project__front'>4 недели</div>
            <span className='about-project__times-label'>Front-end</span>
          </div>
        </div>
    </section>
  )
}

export default AboutProject;
