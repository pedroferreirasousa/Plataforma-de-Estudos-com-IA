import styles from "./page.module.css";
import Hero from '../components/Hero';


export default function Home() {
  return (

    <div className={styles.page}>
      <main className="styles main">
        <Hero />
      </main>
    </div>
  );
}
