import React from 'react';
import photo from '../../images/about-me__photo.jpg';
import './AboutMe.css';



const AboutMe = () => {
  return (
   <section className='about-me'>
     <h2 className='about-me__title'>Студент</h2>
     <div className='about-me__content'>
       <h3 className='about-me__name'>Андрей</h3>
       <h4 className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</h4>
       <p className='about-me__text'>
         Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
       </p>
       {/*<ul className='about-me__social'>*/}

           <a className='about-me__social-link' href='https://github.com/nknrw' target='_blank' rel="noreferrer">Github</a>

       {/*</ul>*/}
     </div>
     <div className='about-me__avatar'>
       <img className='about-me__img' src={photo} alt='Фото' />
     </div>
   </section>
  )
}

export default AboutMe;
