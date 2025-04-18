import styles from './hero.module.scss';
import Image from "next/image";
import svg from '../../../public/logo.svg'



const Hero = () => {
    return (
        <section className={styles.sectionHero}>            
            <div className={styles.containerHero}>
                <Image src={svg} alt="logo" width={300} height={300} />
                <a href="/plataforma">Entrar na plataforma</a>
            </div>
        </section>
    )
}

export default Hero