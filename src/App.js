import React, {useEffect, useState} from 'react'
import './App.css';
import Currency from './components/Currency/Currency';

const BASE_URL = BASE_URL

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => setCurrencyOptions([data.base, ...Object.keys(data.rates)]))
  })
  return (
   <> 
    <h1>Currency Converter</h1>
    <Currency
      currencyOptions={currencyOptions}
    />
    <div className='equals'>=</div>
    <Currency
      currencyOptions={currencyOptions }
    />
  </>
  );
}

export default App;
