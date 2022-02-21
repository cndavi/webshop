import { useRef, useEffect, useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal } from '../../redux/actions'
import CartItem from './CartItem'
import styles from './Cart.module.scss'
import CartEmpty from './CartEmpty/CartEmpty'

const Cart = ({ showCart, setShowCart }) => {
  const { cart, totalAmount } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const cartRef = useRef()

  const keyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && showCart) {
        setShowCart(false)
      }
    },
    [setShowCart, showCart]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart, dispatch])

  return (
    <>
      {showCart ? (
        <div className={styles.cart} ref={cartRef}>
          <div className={styles.cart__wrapper}>
            <div className={styles.cart__wrapper__details}>
              <div className={styles.cart__wrapper__details__title}>
                <span
                  className={styles.cart__wrapper__details__title__divider}
                ></span>
                <h2 className={styles.cart__wrapper__details__title__text}>
                  Your Cart
                </h2>
                <span
                  className={styles.cart__wrapper__details__title__divider}
                ></span>
              </div>

              <div className={styles.cart__wrapper__details__item}>
                {!totalAmount ? (
                  <CartEmpty />
                ) : (
                  cart.map((item) => {
                    return <CartItem key={item.id} {...item} />
                  })
                )}
              </div>
            </div>

            <div className={styles.cart__wrapper__summary}>
              <div className={styles.cart__wrapper__details__title}>
                <span
                  className={styles.cart__wrapper__details__title__divider}
                ></span>
                <h2 className={styles.cart__wrapper__details__title__text}>
                  Summary
                </h2>
                <span
                  className={styles.cart__wrapper__details__title__divider}
                ></span>
              </div>

              <div className={styles.cart__wrapper__summary__total}>
                <h3>
                  Subtotal <span>€{totalAmount}</span>
                </h3>
                <h3>
                  Shipping <span>FREE</span>
                </h3>

                <h3>
                  Total Payment <span>€{totalAmount}</span>
                </h3>
                <button>Go to checkout</button>
              </div>
            </div>

            <div className={styles.cart__wrapper__close}>
              <AiOutlineClose onClick={() => setShowCart((prev) => !prev)} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Cart
