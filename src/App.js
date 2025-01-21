import React, {useEffect} from 'react'
import './App.css';
import Currency from './components/Currency/Currency';

const BASE_URL = BASE_URL

function App() {
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => console.log(data))
  })
  return (
   <> 
    <h1>Currency Converter</h1>
    <Currency />
    <div className='equals'>=</div>
    <Currency/>
  </>
  );
}

export default App;
