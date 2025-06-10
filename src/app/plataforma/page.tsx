import styles from "./page.module.css";
import Main from '../../components/Main';
import Footer from "@/components/Footer";





export default function PlataformaEstudos() {
    return (
        <div className={styles.page}>
          <main className={styles.main}>
            <Main />
            <Footer />
          </main>
        </div>
    );
}