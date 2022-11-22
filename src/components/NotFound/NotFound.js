import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </section>
  )
}

export default NotFound;
