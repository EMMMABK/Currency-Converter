 import React from 'react'
 
 export default function Currency(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
   return (
     <div>
       <input className='input' type="number" value={amount} onChange={onChangeAmount}/>
       <select value={selectedCurrency} name="currency_option" id="" onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
       </select>
     </div>
   )
 }
 