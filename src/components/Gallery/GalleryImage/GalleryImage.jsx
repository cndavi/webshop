import styles from './GalleryImage.module.scss'

const GalleryImage = ({
  imageUrl,
  altText,
  mouseEnter,
  mouseOver,
  mouseLeave,
}) => {
  return (
    <figure className={styles.gallery__container}>
      <img
        src={imageUrl}
        alt={altText}
        onMouseEnter={mouseEnter}
        onMouseMove={mouseOver}
        onMouseLeave={mouseLeave}
        className={styles.gallery__container__image}
      />
    </figure>
  )
}

export default GalleryImage
