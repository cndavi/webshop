import styles from './GalleryDescription.module.scss'

const GalleryDescription = ({ title, category }) => {
  return (
    <div className={styles.galleryDescription}>
      <h2 className={styles.galleryDescription__title}>{title}</h2>
      <h3 className={styles.galleryDescription__category}>{category}</h3>
    </div>
  )
}

export default GalleryDescription
