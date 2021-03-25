import './styles/Header.css';
import logo from '../resources/logo.svg';
import vector from '../resources/vector.svg'


const Header = () => {
  return (  
      <header className="header">

        <div className="header__logo">
          <img src={logo} alt="logo" />
          <span>Batatabit</span>
        </div>
        <div className="header__description">
          <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
          <p>Batatabit te ayudará a navegar entre los diferentes precios y tendencias</p>
          <button >Conoce Nuestros Planes<img src={vector} alt=""/></button>
        </div>
      </header>
  );
}

export default Header;