import { useRef, useEffect, useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Modal.module.scss'

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

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

  return (
    <>
      {showModal ? (
        <div className={styles.modal} ref={modalRef}>
          <div className={styles.modal__wrapper} showModal={showModal}>
            <div className={styles.modal__wrapper__img}></div>
            <div className={styles.modal__wrapper__content}></div>
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
