 import React from 'react'
 
 export default function Currency(props) {
  const {
    currencyOptions
  } = props
   return (
     <div>
       <input className='input' type="number" />
       <select name="currency_option" id="">
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
       </select>
     </div>
   )
 }
 