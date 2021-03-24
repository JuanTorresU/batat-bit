import './styles/Header.css';
import logo from '../resources/logo.svg';


const Header = () => {
  return (  
      <header className="header">

        <div className="header__logo">
          <img src={logo} alt="logo" />
          <span>Batatabit</span>
        </div>
        
          <h1>La próxima revolución en el intercambio de monedas.</h1>
          <p>Batatabit te ayudará a navegar entre los diferentes precios y tendencias</p>
          
      </header>
  );
}

export default Header;