import './styles/Header.css';
import logo from '../resources/logo.svg';


const Header = () => {
  return (  
      <header className="Header">
      
        <div>
          <img src={logo} className="Hedaer-logo" alt="logo" />
          <span className="">Batatabit</span>
        </div>
        <h1>
          La próxima revolución en el intercambio de monedas.
        </h1>
        <p>
          Batatabit te ayudará a navegar entre los diferentes precios y tendencias
        </p>
          
      </header>
  );
}

export default Header;