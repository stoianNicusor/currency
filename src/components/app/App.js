import React, { useState,useEffect } from 'react';
import '../app/App.scss';
import Convert from '../convert/convert.component';
import Display from '../display/display.component';


function App() {

  const [loaded, setLoaded] = useState(false);
  const [coin, setCoin] = useState();
  const [currency, setCurrency] = useState();
  const [conv, setConv] = useState(0);
  
  useEffect(() => {
    async function getData(){
      const resp = await fetch('http://data.fixer.io/api/latest?access_key=78fb5f2d728e9371799618245a2b7463&format=1');
      const jsonResp = await resp.json();
      setCurrency(jsonResp);
      setLoaded(true);
    }
    getData();
  },[loaded]) ;

  let convert = () => {
    var rsp = document.querySelector('#convert').value; 
    var a = rsp * currency.rates.RON;
    setConv(parseFloat(a).toFixed(2));
  }
 
  return (
    loaded ? 
    <div className='App'>
      <div className='middle'> 
        <div className= 'left'>
          <Display display={'EUR: ' + parseFloat(currency.rates.RON).toFixed(3)} />
          <Display display={'GBP: ' + parseFloat(currency.rates.RON/currency.rates.GBP).toFixed(3)} />
          <Display display={'USD: ' + parseFloat(currency.rates.RON/currency.rates.USD).toFixed(3)} />
          <Display display={'RUB: ' + parseFloat(currency.rates.RON/currency.rates.RUB).toFixed(3)} />
          <Display display={'CHF: ' + parseFloat(currency.rates.RON/currency.rates.CHF).toFixed(3)} />  
        </div>
        <div className='right'>
          <Convert placeholder='Convert EURO to LEI' change={convert} conv = {conv + ' Lei'}/>
        </div>
      </div>
    </div> 
    : <div className='load'>
      Loading 
    </div>
  );
}

export default App;