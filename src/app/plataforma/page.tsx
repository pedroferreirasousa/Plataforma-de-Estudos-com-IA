import styles from "../page.module.css";
import Main from '../../components/Main';





export default function PlataformaEstudos() {
    return (
        <div className={styles.page}>
          <main className={styles.main}>
            <Main />
          </main>
          <footer className={styles.footer}>
          </footer>
        </div>
    );
}