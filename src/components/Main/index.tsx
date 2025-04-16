
import StudyPlanner from '../StudyPlanner/StudyPlanner';
import Quiz from '../Quizz';
import styles from './Main.module.scss';

function Main() {
    return (
        <div className={styles.container}>
            <div id='planner' className={styles.left}>
                <StudyPlanner />
            </div>
            <div id='quiz' className={styles.right}>
                <Quiz />
            </div>
        </div>
    );
}

export default Main