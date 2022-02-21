import styles from './Modal.module.scss'
import { increase } from '../../redux/actions'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const Modal = ({ showModal, setShowModal, item }) => {
  const dispatch = useDispatch()
  return (
    <>
      {showModal ? (
        <>
          <div className={styles.modal}>
            <div className={styles.modal__wrapper}>
              <div className={styles.modal__wrapper__image}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.modal__wrapper__details}>
                <h3>{item.title}</h3>
                <h3>€{item.price}</h3>
                <p>{item.description}</p>
                <button onClick={() => dispatch(increase(item.id))}>
                  Add to Cart
                </button>
              </div>

              <div className={styles.modal__wrapper__close}>
                <AiOutlineClose onClick={() => setShowModal((prev) => !prev)} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal
