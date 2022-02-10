import styles from './Hero.module.scss'
import ScrollToButton from '../../elements/ScrollToButton/ScrollToButton'

const Hero = () => (
  <>
    <header className={styles.hero}>
      <div className={styles.hero__banner}>
        <video autoPlay loop muted className={styles.hero__banner__video}>
          <source src={require(`../../assets/videos/hero.mp4`)} />
        </video>
        <div className={styles.hero__banner__title}>
          <h1 className={styles.hero__banner__title__main}>
            welcome to <span>WEEKEND</span>
          </h1>
        </div>
        <div className={styles.hero__banner__seperator}>
          <ScrollToButton />
        </div>
        <div className={styles.hero__banner__breadcrumb}></div>
      </div>
    </header>
  </>
)

export default Hero
