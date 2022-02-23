import styles from './Products.module.scss'
import ProductItem from './ProductItem'
import Footer from '../../components/Footer'
import { productsData } from '../../utils/productsData'

const Products = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.header__text}>
          <h1>front row music</h1>
          <h4>music for healing</h4>
        </div>
        <img
          src={require('../../assets/images/heading/img1.jpg')}
          alt='Records'
        />
      </section>

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
