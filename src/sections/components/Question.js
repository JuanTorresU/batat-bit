import React, {Component} from 'react'
import "./styles/Question.css"
import arrow from "../../resources/vector.svg"

class Question  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  };
    }

    state = {
        showAnswer: true
    }

    // handleClick = e =>{
    //     const container = document.getElementsByClassName("answer")
    //     if (container.display === "none") {
    //         container.display = "block";
    //       } else {
    //         container.display = "none";
    //       }
    // }

    render() { 
        const { showAnswer} = this.state
        return (  
            <div className="question">
                <div className="question__text">
                    <p> {this.props.question} </p>
                    <img className="question__arrow" onClick={() => this.setState({ showAnswer: !showAnswer })} src={arrow} alt="" />
                    
                </div>
                { showAnswer && (
                        <p className="answer">{this.props.answer}</p>
                    )}
                
            </div>
        );
    }
}
 
export default Question;