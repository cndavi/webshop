import styles from './CarouselButton.module.scss'
import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'

const CarouselButton = ({ direction, moveSlide }) => {
  return (
    <div className={styles.controls}>
      <button
        className={
          direction === 'next'
            ? styles.controls__next
            : styles.controls__previous
        }
        onClick={moveSlide}
      >
        <img src={direction === 'next' ? rightArrow : leftArrow} alt='' />
      </button>
    </div>
  )
}

export default CarouselButton
