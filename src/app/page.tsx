import styles from "./page.module.css";
import StudyPlanner from '../components/StudyPlanner/StudyPlanner';
import AppProviders from "@/contexts";


export default function Home() {
  return (
    <AppProviders>
      <div className={styles.page}>
        <main className={styles.main}>
          <StudyPlanner />
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </AppProviders>
  );
}
