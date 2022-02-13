import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'
import Gallery from '../Gallery'

const Hero = () => (
  <>
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__container__grid}>
          <div className={styles.hero__container__grid__item}>
            <Gallery
              title='Kurt Cobain'
              category='Record Player'
              imageUrl={require(`../../assets/images/img1.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item}>
            <Gallery
              title='Amy Winehouse'
              category='Record Player'
              imageUrl={require(`../../assets/images/img16.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item}>
            <Gallery
              title='Jim Morrison'
              category='Record Player'
              imageUrl={require(`../../assets/images/img4.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item__small}>
            <Gallery
              title='Janis Joplin'
              category='Record Player'
              imageUrl={require(`../../assets/images/img15.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item__small}>
            <Gallery
              title='Jimi Hendrix'
              category='Record Player'
              imageUrl={require(`../../assets/images/img14.jpg`)}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.hero__breadcrumb}>
      <Link to='products'>
        <button className={styles.hero__breadcrumb__button}>View More</button>
      </Link>
    </div>
  </>
)

export default Hero
