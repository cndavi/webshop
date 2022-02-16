import { productsData } from '../../../utils/productsData'
import { useParams } from 'react-router-dom'
import { increase } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import styles from './ProductDescription.module.scss'

const ProductDescription = () => {
  const productId = useParams()
  const productDetail = productsData.filter((x) => x.id == productId.id)
  const product = productDetail[0]

  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.header}>
        <img
          src={require('../../../assets/images/heading/img1.jpg')}
          alt='Records'
        />
      </div>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__container}>
          <div className={styles.productDetail__container__item}>
            <div className={styles.productDetail__container__item__image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className={styles.productDetail__container__item}>
            <h3>{product.title}</h3>
            <p>€{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => dispatch(increase(product.id))}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDescription
