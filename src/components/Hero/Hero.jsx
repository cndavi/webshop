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
              imageUrl={require(`../../assets/images/hero/img1.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item}>
            <Gallery
              title='Amy Winehouse'
              category='Record Player'
              imageUrl={require(`../../assets/images/hero/img2.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item}>
            <Gallery
              title='Jim Morrison'
              category='Record Player'
              imageUrl={require(`../../assets/images/hero/img3.jpg`)}
            />
          </div>

          <div
            className={`${styles.hero__container__grid__item} ${styles.hero__container__grid__item__hide}`}
          >
            <Gallery
              title='David Bowie'
              category='Record Player'
              imageUrl={require(`../../assets/images/hero/img6.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item__small}>
            <Gallery
              title='Janis Joplin'
              category='Record Player'
              imageUrl={require(`../../assets/images/hero/img4.jpg`)}
            />
          </div>

          <div className={styles.hero__container__grid__item__small}>
            <Gallery
              title='Jimi Hendrix'
              category='Record Player'
              imageUrl={require(`../../assets/images/hero/img5.jpg`)}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.hero__breadcrumb}></div>
  </>
)

export default Hero
