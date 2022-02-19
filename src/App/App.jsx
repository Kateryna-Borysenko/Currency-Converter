import { useState, useEffect } from 'react';
import './App.module.css';
import getCurrency from '../services/api';
import Header from '../Header/Header';
import { Container } from '../Container/Container';

function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrency().then(response => {
      setRates(response.rates);
    });
  }, []);

  const format = number => {
    return number.toFixed(4);
  };

  return (
    <Container>
      <Header format={format} rates={rates} />
    </Container>
  );
}

export default App;
