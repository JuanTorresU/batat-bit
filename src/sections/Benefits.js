import './styles/Benefits.css';
import clock from '../resources/clock.svg';
import eye from '../resources/eye.svg';
import dollarSign from '../resources/dollar-sign.svg';
import checkCircle from '../resources/check-circle.svg';
import bitcoinBaby from '../resources/bitcoin-baby.jpg';


const Benefits = () => {
    return ( 
        <section className='benefits'>
            <h2>Te ayudamos a tomar la mejor decisión, siempre.</h2>
            <p>Que la incertidumbre en materia de criptomonedas sea cosa del pasado</p>

            <div className='benefits__card'>
                <img className='benefits__img' src={clock} alt=""/>
                <h3>Tiempo real</h3>
                <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </div>

            <div className='benefits__card'>
                <img className='benefits__img' src={eye} alt=""/>
                <h3>No hay tasas escondidas</h3>
                <p>Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
            </div>

            <div className='benefits__card'>
                <img className='benefits__img' src={dollarSign} alt=""/>
                <h3>Compara monedas</h3>
                <p>No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
            </div>

            <div className='benefits__card'>
                <img className='benefits__img' src={checkCircle} alt=""/>
                <h3>Información confiable</h3>
                <p>Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
            </div>

            <div>
                Conócelo hoy.
                <img src={bitcoinBaby} alt=""/>
            </div>
        </section>
                
    );
}


 
export default Benefits;