import styles from './Products.module.scss'
import products from '../../redux/constants/products'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <>
      <section className={styles.header}>
        <img src={require('../../assets/images/img18.jpg')} alt='Records' />
      </section>
      <section className={styles.products}>
        <div className={styles.products__container}>
          {products.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Products
