import './styles/Footer.css';
import logo from '../resources/logo.svg';


const Foater = () => {
    return (  
        <footer className="footer">
            <div>
                <a href="http://www.linkedin.com"><p>Linkedin</p></a>
                <a href="http://www.crunchbase.com"><p>Hackernews</p></a>
                <a href="http://www.hackernews.com"><p>Hackernews</p></a>
            </div>
                              
            <div>
                <img src={logo} className="Hedaer-logo" alt="logo" />
                <p>*Bstatabit 2020</p>  
            </div>
        </footer>
    );
}
 
export default Foater;