import styles from './GalleryDescription.module.scss'

const GalleryDescription = ({ title, category }) => {
  return (
    <div className={styles.galleryDescription}>
      <div className={styles.galleryDescription__title}>{title}</div>
      <div className={styles.galleryDescription__category}>{category}</div>
    </div>
  )
}

export default GalleryDescription
