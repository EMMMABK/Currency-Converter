 import React from 'react'
 import './Currency.scss';

 export default function Currency(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
   return (
    <div className="currency-container">
      <input className="input" type="number" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} name="currency_option" id="" onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>  
  )
}
 