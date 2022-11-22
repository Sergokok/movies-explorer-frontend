import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';

// const [email , setEmail] = useState('tratata@tratata.ru');
// const [password , setPassword] = useState('11111111');
//
// function handleChangeEmail(e) {
//   setEmail(e.target.value);
// }
//
// function handleSubmit(e) {
//   e.preventDefault();
// }

const Login = () => {
  return (
    <section className='login'>
      <Logo className='login__logo' />
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
      <div className='login__fieldset'>
          <label className='login__label'>E-mail
            <input
              className='login__input'
              type='email'
              name='email'
              placeholder='pochta@yandex.ru'
              minLength={2}
              maxLength={30}
              required={true}
            />
          </label>
          <label className='login__label'>Пароль
            <input
              className='login__input'
              type='password'
              name='password'
              placeholder='Пароль'
              minLength={6}
              maxLength={30}
              required={true}
              />
          </label>
          <span className='login__error'>Что-то пошло не так...</span>
        </div>
        <button className='login__btn-submit' type='submit'>Войти</button>
      </form>
      <div className='login__auth'>
        <p className='login__auth-text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__auth-link'>Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;
