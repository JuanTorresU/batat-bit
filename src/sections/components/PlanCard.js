import React, {Component} from 'react'
import "./styles/PlanCard.css"
import arrowRight from '../../resources/arrow-right.svg'
class PlanCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="card">
                <p className="card__payment">Pago Anual</p>
                <div className="card__price">
                    <p> <span className="card__price__sign">$</span> <span className="card__price__num">49</span></p>
                </div>

                <p className="card__savings">*Ahorras $129 comparado al plan mensual</p>
                <button className="card__call-to-action"><p>Escoger este</p> <img src={arrowRight} alt=""/></button>
                

            </div>
        );
    }
}
 
export default PlanCard;