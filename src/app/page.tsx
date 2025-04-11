import styles from "./page.module.css";
import StudyPlanner from '../components/StudyPlanner/StudyPlanner';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StudyPlanner />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
