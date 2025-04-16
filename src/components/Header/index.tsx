import styles from './Header.module.scss';
import Image from "next/image";
import svg from '../../../public/svgLogo.svg'


const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.title}>
                    <Image src={svg} alt="logo" width={48} height={48} />
                    Plataforma StudIA
                </h1>
                <h1 className={styles.titleMobile}>
                    <Image src={svg} alt="logo" width={48} height={48} />
                    StudIA
                </h1>
                <nav>
                    <a href="#planner">Planejador</a>
                    <a href="#quiz">Quiz</a>
                </nav>
            </div>
        </header>
    )
}

export default Header