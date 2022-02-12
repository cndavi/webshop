import styles from './GalleryImage.module.scss'

const GalleryImage = ({
  imageUrl,
  altText,
  mouseEnter,
  mouseOver,
  mouseLeave,
}) => {
  return (
    <figure className={styles.galleryImage}>
      <img
        src={imageUrl}
        alt={altText}
        onMouseEnter={mouseEnter}
        onMouseMove={mouseOver}
        onMouseLeave={mouseLeave}
      />
    </figure>
  )
}

export default GalleryImage
