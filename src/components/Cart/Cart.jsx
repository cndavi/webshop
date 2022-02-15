import { useRef, useEffect, useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal, clearItems } from '../../redux/actions'
import CartItem from './CartItem'
import styles from './Cart.module.scss'

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
  }, [cart])

  return (
    <>
      {showCart ? (
        <div className={styles.cart} ref={cartRef}>
          <div className={styles.cart__wrapper} showCart={showCart}>
            <div className={styles.cart__wrapper__details}>
              <h2>Your Cart</h2>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className={styles.cart__wrapper__summary}>
              <h3>
                Subtotal <span>€{totalAmount}</span>
              </h3>
              <h3>
                Shipping <span>FREE</span>
              </h3>
              <h3>
                Total Payment <span>€{totalAmount}</span>
              </h3>
              <button>Continue Shopping</button>
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
