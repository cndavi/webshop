import styles from './Products.module.scss'
import ProductItem from './ProductItem'
import Footer from '../../components/Footer'
import { productsData } from '../../utils/productsData'

const Products = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.header__text}>
          <h2>FRONT ROW SOUND</h2>
        </div>
        <img
          src={require('../../assets/images/heading/img2.jpg')}
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
