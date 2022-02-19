import { useState, useEffect } from 'react';
import './App.module.css';
import getCurrency from '../services/api';
function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrency().then(response => {
      setRates(response.rates);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
      </header>
    </div>
  );
}

export default App;
