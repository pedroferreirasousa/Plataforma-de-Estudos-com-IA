
import StudyPlanner from '../StudyPlanner/StudyPlanner';
import Quiz from '../Quizz';
import styles from './Main.module.scss';
import Image from 'next/image';
import Logo from '../../../public/logo.svg'

function Main() {
    return (
        <div className={styles.section}>
        <div className={styles.logo}>
            <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.container}>
            <div id='planner' className={styles.left}>
                <StudyPlanner />
            </div>
            <div id='quiz' className={styles.right}>
                <Quiz />
            </div>
        </div>
        </div>
    );
}

export default Main