import { Link } from 'react-router-dom'
import { increase } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className={styles.productItem}>
        <div className={styles.productItem__image}>
          <Link to={`/products/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.productItem__hide}
            />
          </Link>
        </div>
        <div className={styles.productItem__description}>
          <div className={styles.productItem__description__main}>
            <h3>{item.title}</h3>
            <p>€{item.price}</p>
          </div>
        </div>

        <div className={styles.productItem__buttons}>
          <Link to={`/products/${item.id}`}>
            <button>More Info</button>
          </Link>
          <button onClick={() => dispatch(increase(item.id))}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductItem
