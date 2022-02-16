import styles from './Header.module.scss'
import ScrollToButton from '../../elements/ScrollToButton'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__banner}>
        <video autoPlay loop muted className={styles.header__banner__video}>
          <source src={require(`../../assets/videos/hero.mp4`)} />
        </video>

        <div className={styles.header__banner__title}>
          <h1 className={styles.header__banner__title__main}>
            home is where a <span>Vinyl Box</span> is
          </h1>
        </div>

        <div className='seperator'>
          <div className={styles.header__banner__seperator}>
            <ScrollToButton />
          </div>
        </div>

        <div className={styles.header__banner__breadcrumb}></div>
      </div>
    </header>
  )
}

export default Header
