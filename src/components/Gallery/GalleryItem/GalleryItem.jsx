import styles from './GalleryItem.module.scss'
import { useState } from 'react'
import GalleryImage from '../GalleryImage'
import GalleryDescription from '../GalleryDescription'

const GalleryItem = ({
  contentHeight = 100,
  contentWidth = 100,
  title,
  category,
  imageUrl,
}) => {
  const [y, setY] = useState()
  const [x, setX] = useState()
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseOver = (event) => {
    const element = event.currentTarget
    const { top, left } = element.getBoundingClientRect()
    const x = event.pageX - left - window.pageXOffset
    const y = event.pageY - top - window.pageYOffset
    setY(y)
    setX(x)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <>
      <div className={styles.gallery__item}>
        <GalleryImage
          imageUrl={imageUrl}
          altText='Record Player'
          mouseEnter={handleMouseEnter}
          mouseOver={handleMouseOver}
          mouseLeave={handleMouseLeave}
        />

        <span
          className={styles.gallery__item__description}
          style={{
            display: hover ? '' : 'none',
            top: `${y - contentHeight / 2}px`,
            left: `${x - contentWidth / 2}px`,
          }}
        >
          <GalleryDescription title={title} category={category} />
        </span>
      </div>
    </>
  )
}

export default GalleryItem
