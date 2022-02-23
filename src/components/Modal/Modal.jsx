import styles from './Modal.module.scss'
import { increase } from '../../redux/actions'
import { AiOutlineClose } from 'react-icons/ai'
import { useRef, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const Modal = ({ showModal, setShowModal, item }) => {
  const modalRef = useRef()
  const dispatch = useDispatch()

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  useEffect(() => {
    if (showModal === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  return (
    <>
      {showModal ? (
        <div className={styles.modal} onClick={closeModal} ref={modalRef}>
          <div className={styles.modal__wrapper}>
            <div className={styles.modal__wrapper__image}>
              <img src={item.image} alt={item.title} />
            </div>

            <div className={styles.modal__wrapper__details}>
              <h2>{item.title}</h2>
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
      ) : null}
    </>
  )
}

export default Modal
