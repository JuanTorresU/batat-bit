import React, {Component} from 'react'
import downVector from '../../resources/down-vector.svg'
import upVector from '../../resources/up-vector.svg'
import "./styles/Coins.css"

const item1 = "Bitcoin";
const item2 = "Ethereum";
const item3 = "Ripple";
const item4 = "Stellar";

const value1 = 56;
const value2 = 18;
const value3 = 4.5;
const value4 = 2.6;

class Coins extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="coins">
                <table>
                    <tbody>
                        <tr>
                            <td className="column-1">{item1}</td>
                            <td className="column-2">$ {value1} <img src={downVector} alt=""/></td>
                        </tr>

                        <tr>
                            <td className="column-1">{item2}</td>
                            <td className="column-2">$ {value2} <img src={upVector} alt=""/></td>
                        </tr>

                        <tr>
                            <td className="column-1">{item3}</td>
                            <td className="column-2">$ {value3} <img src={downVector} alt=""/></td>
                        </tr>

                        <tr>
                            <td className="column-1">{item4}</td>
                            <td className="column-2">$ {value4} <img src={downVector} alt=""/></td>
                        </tr>
                    </tbody>
                </table>

                <div className="usd">
                    <p> Valores en <b>$ USD</b></p>
                </div>

            </div>
         );
    }
}
 
export default Coins;