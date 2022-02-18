import styles from './Products.module.scss'
import Carousel from '../../components/Carousel'
import carouselData from '../../utils/carouselData'

const Products = () => {
  return (
    <>
      <Carousel slides={carouselData} />
    </>
  )
}

export default Products
