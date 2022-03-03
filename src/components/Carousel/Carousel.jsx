import { GrFormPreviousLink } from 'react-icons/gr'
import { GrFormNextLink } from 'react-icons/gr'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { carouselData } from '../../utils/carouselData'
import styles from './Carousel.module.scss'

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== carouselData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === carouselData.length) {
      setSlideIndex(1)
    }
  }

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(carouselData.length)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h2>Feel the groove</h2>
        <div className={styles.carousel}>
          {carouselData.map((slide, index) => {
            return (
              <div className={styles.carousel__item} key={slide.id}>
                <div
                  className={
                    slideIndex === index + 1
                      ? `${styles.carousel__item__active} ${styles.carousel__item__slide}`
                      : styles.carousel__item__slide
                  }
                  key={slide.id}
                >
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div
                  className={
                    slideIndex === index + 1
                      ? `${styles.carousel__text__active} ${styles.carousel__text}`
                      : styles.carousel__text
                  }
                >
                  <div className={styles.carousel__text__intro}>
                    <div className={styles.carousel__text__intro__title}>
                      {slide.title}
                    </div>
                    <Link to='/products'>
                      <button className={styles.carousel__text__intro__btn}>
                        Find out more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.arrows}>
          <GrFormPreviousLink onClick={previousSlide} />
          <GrFormNextLink onClick={nextSlide} />
        </div>
      </div>
      <div className={styles.breadcrumb}></div>
    </>
  )
}

export default Carousel
