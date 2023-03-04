import { useState } from 'react'
import './CurrencyConverter.css'

function CurrencyConverter() {
  const [count, setCount] = useState(0)

  return (
    <div className="CurrencyConverter">
      <h2>Currency Converter</h2>
    </div>
  )
}

export default CurrencyConverter
