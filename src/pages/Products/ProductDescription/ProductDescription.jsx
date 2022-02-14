import styles from './ProductDescription.module.scss'
import products from '../../../redux/constants/products'
import { useParams } from 'react-router-dom'

const ProductDescription = () => {
  const productId = useParams()
  const productDetail = products.filter((x) => x.id == productId.id)
  const product = productDetail[0]

  return (
    <>
      <div className={styles.productDetail__header}>
        <img src={require('../../../assets/images/img11.jpg')} alt='Records' />
      </div>
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>€{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </>
  )
}

export default ProductDescription
