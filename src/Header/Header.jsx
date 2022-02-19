import React from 'react';

const Header = ({ format, rates }) => {
  return (
    <header>
      <span>EUR: {format(rates.UAH / rates.EUR)}</span>
      <span>USD: {format(rates.UAH / rates.USD)}</span>
    </header>
  );
};

export default Header;
