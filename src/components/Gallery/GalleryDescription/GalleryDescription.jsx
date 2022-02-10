import styles from './GalleryDescription.module.scss'

const GalleryDescription = ({ title, category }) => {
  return (
    <div className={styles.gallery__description}>
      <h2 className={styles.gallery__description__title}>{title}</h2>
      <h3 className={styles.gallery__description__category}>{category}</h3>
    </div>
  )
}

export default GalleryDescription
