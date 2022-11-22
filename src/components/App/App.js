import React,  { useState } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import './App.css';


function App() {

  const [loginIn, setLoggedIn] = useState(true);
  const noHeaderVisible = ['/not-found', '/signup', '/signin'];
  const noFooterVisible = ['/not-found','/profile', '/signup', '/signin'];

  return (
    <div className='app'>

      {useRouteMatch(noHeaderVisible) ? null : <Header loginIn={loginIn} />}

      <Switch>
        <Route path='/movies'>
          <Movies loginIn={loginIn} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies loginIn={loginIn} />
        </Route>
        <Route path='/profile'>
          <Profile loginIn={loginIn} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/' exact>
          <Main loginIn={loginIn} />
        </Route>
        <Route path='/not-found'>
          <NotFound />
        </Route>
        <Redirect to='/not-found'/>
      </Switch>

      {useRouteMatch(noFooterVisible) ? null : <Footer />}

    </div>
  );
}

export default App;
