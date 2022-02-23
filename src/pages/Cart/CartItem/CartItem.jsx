import styles from './CartItem.module.scss'
import { BiTrashAlt } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../../../redux/actions'

const CartItem = ({ id, image, title, price, amount }) => {
  const dispatch = useDispatch()

  if (amount === 0) {
    return <></>
  }
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__item}>
        <div className={styles.cartItem__item__image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.cartItem__item__details}>
          <div className={styles.cartItem__item__details__name}>{title}</div>
          <div className={styles.cartItem__item__details__price}>€{price}</div>
        </div>
        <div className={styles.cartItem__item__buttons}>
          <div className={styles.cartItem__item__buttons__controls}>
            <div className={styles.cartItem__item__buttons__controls__quantity}>
              <BiMinus
                onClick={() => dispatch(decrease(id))}
                className={
                  styles.cartItem__item__buttons__controls__quantity__icon
                }
              />
              <input type='number' value={amount} readOnly />
              <BiPlus
                onClick={() => dispatch(increase(id))}
                className={
                  styles.cartItem__item__buttons__controls__quantity__icon
                }
              />
            </div>
            <div className={styles.cartItem__item__buttons__controls__remove}>
              <BiTrashAlt onClick={() => dispatch(remove(id))} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CartItem
