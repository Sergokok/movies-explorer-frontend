import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <>
    <SearchForm />
    <MoviesCardList />
    <button className='movies__button-more'>Ещё</button>
    </>
  )
}

export default Movies;
