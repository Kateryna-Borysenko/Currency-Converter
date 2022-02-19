import React from 'react';
import s from './Header.module.css';

const Header = ({ format, rates }) => {
  return (
    <header className={s.wrap}>
      <span className={s.value}>
        <span className={s.currency}>EUR: </span>{' '}
        {format(rates.UAH / rates.EUR)}
        &#8372;
      </span>
      <span className={s.value}>
        <span className={s.currency}>USD: </span>{' '}
        {format(rates.UAH / rates.USD)}
        &#8372;
      </span>
    </header>
  );
};

export default Header;
