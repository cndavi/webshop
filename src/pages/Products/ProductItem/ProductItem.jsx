import { increase } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <>
      <div className={styles.productItem}>
        <div className={styles.productItem__container}>
          <div className={styles.productItem__container__image}>
            <img src={item.image} alt={item.title} />
            <div className={styles.productItem__container__image__overlay}>
              <button onClick={openModal}>View More</button>
            </div>
            <Modal
              showModal={showModal}
              item={item}
              setShowModal={setShowModal}
            />
          </div>
        </div>
        <div className={styles.productItem__description}>
          <div className={styles.productItem__description__main}>
            <h3>{item.title}</h3>
            <p>€{item.price}</p>
          </div>
        </div>

        <div className={styles.productItem__buttons}>
          <button onClick={() => dispatch(increase(item.id))}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductItem
