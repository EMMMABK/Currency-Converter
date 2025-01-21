import React, {useEffect, useState} from 'react'
import './App.css';
import Currency from './components/Currency/Currency';

const BASE_URL = '/currency.json'


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
    })
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
