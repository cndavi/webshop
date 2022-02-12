import styles from './Products.module.scss'

const Products = () => {
  return (
    <>
      <div className={styles.products__header}>
        <img src={require('../../assets/images/img17.jpg')} alt='Records' />
      </div>
    </>
  )
}

export default Products
