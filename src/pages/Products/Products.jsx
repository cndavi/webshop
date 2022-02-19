import styles from './Products.module.scss'
import Carousel from '../../components/Carousel'
import ProductItem from './ProductItem'
import Footer from '../../components/Footer'
import { carouselData } from '../../utils/carouselData'
import { productsData } from '../../utils/productsData'

const Products = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel slides={carouselData} />
      </div>

      <section className={styles.products}>
        <div className={styles.products__container}>
          {productsData.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products
