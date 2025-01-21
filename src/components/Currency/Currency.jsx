 import React from 'react'
 
 export default function Currency(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency
  } = props
   return (
     <div>
       <input className='input' type="number" />
       <select value={selectedCurrency} name="currency_option" id="" onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
       </select>
     </div>
   )
 }
 