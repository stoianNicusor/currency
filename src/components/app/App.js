import React, { useState,useEffect } from 'react';
import '../app/App.scss';
import Convert from '../convert/convert.component';
import Display from '../display/display.component';
import {FaPoundSign,FaDollarSign,FaRubleSign} from 'react-icons/fa';
import {BiCoin} from 'react-icons/bi';
import {AiOutlineEuroCircle} from "react-icons/ai";
import Particles from 'react-particles-js';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [coin, setCoin] = useState([]);
  const [currency, setCurrency] = useState();
  const [conv, setConv] = useState(0);
  const [newCoin, setNewCoin] = useState('EUR');
  
  useEffect(() => {
    async function getData(){
      const resp = await fetch('http://data.fixer.io/api/latest?access_key=78fb5f2d728e9371799618245a2b7463&format=1&symbols=EUR,USD,GBP,RUB,CHF,RON');
      const jsonResp = await resp.json();
      setCurrency(jsonResp);
      setLoaded(true);
     setCoin([...Object.keys(jsonResp.rates)]);
    }
    getData();
  },[loaded]) ;

  let switchCoin = () => {
    var rsp = document.querySelector('#select').value;
    setNewCoin(rsp);
  } 

  let convert = () => {
    var inp = document.querySelector('#convert').value;
    switch (newCoin) {
      case 'EUR':
        let a = inp *  currency.rates.RON;
        setConv(parseFloat(a).toFixed(2));
      break;
      
      case 'USD':
        let b = inp *  (currency.rates.RON/currency.rates.USD);
        setConv(parseFloat(b).toFixed(2));
      break;

      case 'GBP':
        let c = inp *  (currency.rates.RON/currency.rates.GBP);
        setConv(parseFloat(c).toFixed(2));
      break;

      case 'RUB':
        let d = inp *  (currency.rates.RON/currency.rates.RUB);
        setConv(parseFloat(d).toFixed(2));
      break;

      case 'CHF':
        let e = inp *  (currency.rates.RON/currency.rates.CHF);
        setConv(parseFloat(e).toFixed(2)); 
      break;
    }
  }
 
  return (
    loaded ? 
    <div className='App'>
      <div className= 'left'>
        <div className='currency'>
          <div className='euro'>
            <div className='icon'>
              <AiOutlineEuroCircle/> 
            </div>    
              Euro
          </div>
            <Display display={parseFloat(currency.rates.RON).toFixed(3)} />
        </div>
        <div className='currency'>
          <div className='gbp'>
            <div className='iconG'>
              <FaPoundSign/>
            </div>
            Lira Sterlina (GBP)
          </div>
          <Display display={parseFloat(currency.rates.RON/currency.rates.GBP).toFixed(3)} />
        </div>
        <div className='currency'>
          <div className='dollar'>
            <div className='iconD'>
              <FaDollarSign/>
            </div>
            Dolar (USD)
          </div>
          <Display display={parseFloat(currency.rates.RON/currency.rates.USD).toFixed(3)} />
        </div>
        <div className='currency'>
          <div className='rub'>
            <div className='iconR'>
              <FaRubleSign/>
            </div>
          Rubla Rusesca (RUB)
          </div>
          <Display display={parseFloat(currency.rates.RON/currency.rates.RUB).toFixed(3)} />
        </div>
        <div className='currency'>
          <div className='chf'>
            <div className='iconC'>
              <BiCoin/>
            </div>
            Franc Elvetian (CHF)
          </div>
          <Display display={parseFloat(currency.rates.RON/currency.rates.CHF).toFixed(3)} />  
        </div>
      </div>
      <div className='right'>
        <Convert placeholder='Convert' change={convert} conv = {conv + ' Lei'} selected={coin} switchC={switchCoin}/>
      </div>
      <Particles
      params={
        {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 120,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 12,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 800,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
              },
              "repulse": {
                "distance": 400,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }
      }
      />
    </div>
    : <div className='load'>
      Loading 
    </div>
  );
}

export default App;