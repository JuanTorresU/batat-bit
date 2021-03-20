import './styles/Plans.css';
import PlanCard from './components/PlanCard'
import Question from './components/Question'

const Plans = () => {
    return (  
        <section>
            <h2>Escoge el plan que mejor se ajuste a ti</h2>
            <p>Cualquier plan te da acceso completo a nuestra plataforma</p>

            <PlanCard/>
            <h2>¿Preguntas? Aquí estamos para ti.</h2>
            <Question/>
        </section>
    );
}
 
export default Plans;