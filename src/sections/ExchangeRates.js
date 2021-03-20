import './styles/ExchanceRates.css';

import bitcoin_img from '../resources/bitcoin.svg';
import Coins from './components/Coins'
const ExchangeRates = () => {
    return (
        <section>
            <img src={bitcoin_img} className="Hedaer-logo" alt="logo" />
            <h2>Visibilizamos todas las tasas de cambio</h2>
            <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
            <Coins/>
        </section>  
        
    );
}
 
export default ExchangeRates;
