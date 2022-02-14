import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
  return (
    <>
      <div className={styles.productItem}>
        <div className={styles.productItem__image}>
          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt={item.title} />
          </Link>
        </div>
        <div className={styles.productItem__description}>
          <div className={styles.productItem__description__main}>
            <h3>{item.title}</h3>
            <p>€{item.price}</p>
          </div>
          <p>{item.description}</p>
        </div>

        <div className={styles.productItem__buttons}>
          <Link to={`/products/${item.id}`}>
            <button>More Info</button>
          </Link>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductItem
