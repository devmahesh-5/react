import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {

  const [amount,setAmount]=useState('');
  const [fromCurrency,setFromCurrency]=useState('usd');
  const [toCurrency,setToCurrency]=useState('npr');
  const currencyInfo=useCurrencyinfo(fromCurrency);//returns object of currency and exchange rate
  const [convertedAmount,setConvertedAmount]=useState('');
  const options=Object.keys(currencyInfo);
console.log(options);
 
 const swap=()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
 }

 const convertAmount=()=>{
  setConvertedAmount(amount*currencyInfo[toCurrency])
 }

return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/6771117/pexels-photo-6771117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convertAmount();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From" 
                          amount={amount}
                           onAmountChange={(amount)=>setAmount(amount)} 
                           onCurrencyChange={(currency)=>setFromCurrency(currency)} currencyOptions={options} 
                           selectedCurrency={fromCurrency}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"  
                          amount={convertedAmount} 
                          onAmountChange={(amount)=>setConvertedAmount(amount)}
                           onCurrencyChange={(currency)=>setToCurrency(currency)} currencyOptions={options} 
                           selectedCurrency={toCurrency}
                           amountDisabled={true}
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                  onClick={convertAmount}
                  >
                      Convert {fromCurrency} to {toCurrency}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
