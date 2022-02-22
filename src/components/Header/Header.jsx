import styles from './Header.module.scss'
import ScrollToButton from '../ScrollToButton'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__banner}>
        <video autoPlay loop muted className={styles.header__banner__video}>
          <source src={require(`../../assets/videos/hero.mp4`)} />
        </video>

        <div className={styles.header__banner__title}>
          <h1>home is where a Vinyl Box is</h1>
          <h4>check out our new collection</h4>
          <Link to='/products'>
            <button>DISCOVER MORE</button>
          </Link>
        </div>

        <div className={styles.header__banner__seperator}>
          <ScrollToButton />
        </div>

        <div className={styles.header__banner__breadcrumb}></div>
      </div>
    </header>
  )
}

export default Header
