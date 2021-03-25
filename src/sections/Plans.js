import './styles/Plans.css';
import PlanCard from './components/PlanCard'
import Question from './components/Question'

const Plans = () => {
    const question1 = "Batabit me permite hacer compras en su plataforma?"
    const answer1 = "No. Batatabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta."
    
    const question2 = "Ques es Bitcoin?"
    const answer2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
    const question3 = "Cómo puedo realizar una transacción en bitcoins?"
    const answer3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    const question4 = "Como aseguro mis compras?"
    const answer4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
    
    return (  
        <section className="plans">
            <h2>Escoge el plan que mejor se ajuste a ti</h2>
            <p>Cualquier plan te da acceso completo a nuestra plataforma</p>

            <PlanCard/>
            <h2>¿Preguntas? Aquí estamos para ti.</h2>
            
            <div className="plans__questions">
                <Question question={question1} answer={answer1}/>
                <Question question={question2} answer={answer2}/>
                <Question question={question3} answer={answer3}/>
                <Question question={question4} answer={answer4}/>
            </div>


        </section>
    );
}
 
export default Plans;