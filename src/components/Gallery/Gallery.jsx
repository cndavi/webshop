import styles from './Gallery.module.scss'
import { Link } from 'react-router-dom'
import GalleryItem from './GalleryItem'

const Gallery = () => {
  return (
    <main className='gallery'>
      <div className={styles.gallery}>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__container__grid}>
            <div className={styles.gallery__container__grid__item}>
              <Link to='/products'>
                <GalleryItem
                  title='Kurt Cobain'
                  category='Record Player'
                  imageUrl={require(`../../assets/images/img1.jpg`)}
                />
              </Link>
            </div>

            <div className={styles.gallery__container__grid__item}>
              <Link to='/products'>
                <GalleryItem
                  title='Amy Winehouse'
                  category='Record Player'
                  imageUrl={require(`../../assets/images/img2.jpg`)}
                />
              </Link>
            </div>

            <div className={styles.gallery__container__grid__item}>
              <Link to='/products'>
                <GalleryItem
                  title='Jim Morrison'
                  category='Record Player'
                  imageUrl={require(`../../assets/images/img3.jpg`)}
                />
              </Link>
            </div>

            <div className={styles.gallery__container__grid__item__small}>
              <Link to='/products'>
                <GalleryItem
                  title='Janis Joplin'
                  category='Record Player'
                  imageUrl={require(`../../assets/images/img4.jpg`)}
                />
              </Link>
            </div>

            <div className={styles.gallery__container__grid__item__small}>
              <Link to='/products'>
                <GalleryItem
                  title='Jimi Hendrix'
                  category='Record Player'
                  imageUrl={require(`../../assets/images/img5.jpg`)}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gallery__breadcrumb}></div>
    </main>
  )
}

export default Gallery
