import React, {Component} from 'react'

class Coins extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <p>Bitcoin</p>
            <p>Ethereum</p>
            <p>Ripple</p>
            <p>Stellar</p>
            <div>
                Valores en <b>$ USD</b>
            </div>
            </div>
         );
    }
}
 
export default Coins;