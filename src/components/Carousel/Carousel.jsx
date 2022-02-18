import { useState } from 'react'
import CarouselButton from '../../elements/CarouselButton'
import styles from './Carousel.module.scss'
import carouselData from '../../utils/carouselData'

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
        <div className={styles.carousel}>
          {carouselData.map((item, index) => {
            return (
              <div className={styles.carousel__item} key={item.id}>
                <div
                  className={
                    slideIndex === index + 1
                      ? `${styles.carousel__item__active} ${styles.carousel__item__slide}`
                      : styles.carousel__item__slide
                  }
                  key={item.id}
                >
                  <img
                    src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                    alt=''
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.button}>
          <CarouselButton moveSlide={nextSlide} direction={'next'} />
          <CarouselButton moveSlide={previousSlide} direction={'previous'} />
        </div>
      </div>
    </>
  )
}

export default Carousel
