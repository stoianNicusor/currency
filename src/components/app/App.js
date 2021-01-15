import React, { useState,useEffect } from 'react';
import '../app/App.scss';
import Display from '../display/display.component';


function App() {

  const [loaded, setLoaded] = useState(false);
  const [coin, setCoin] = useState();
  const [currency, setCurrency] = useState();
  
  useEffect(() => {
    async function getData(){
      const resp = await fetch('http://data.fixer.io/api/latest?access_key=78fb5f2d728e9371799618245a2b7463&format=1&symbols=RON,USD,GBP');
      const jsonResp = await resp.json();
      setCurrency(jsonResp);
      setLoaded(true);
    }
    getData();
  }) ;
  return (
    <div className='App'>
      <Display display={'EUR: ' + currency.rates.RON} />
      <Display display={'GBP: ' + parseFloat(currency.rates.RON/currency.rates.GBP).toFixed(3)} />
    </div> 
  );
}

export default App;