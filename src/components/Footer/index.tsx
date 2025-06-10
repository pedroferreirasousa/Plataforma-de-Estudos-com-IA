import styles from './styles.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>Projeto desenvolvido por <a target='__blank' href="https://pedroferreirasousa.vercel.app/">Pedro Ferreira</a></p>
        </footer>
    );
}

export default Footer;