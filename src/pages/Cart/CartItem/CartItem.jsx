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
      <div className={styles.cartItem__image}>
        <img src={image} alt={title} style={{ width: '5rem' }} />
      </div>

      <div className={styles.cartItem__description}>
        <h5>{title}</h5>
        <h5>€{price}</h5>
      </div>

      <div className={styles.cartItem__icons}></div>
      <BiMinus onClick={() => dispatch(decrease(id))} />
      <p>{amount}</p>
      <BiPlus onClick={() => dispatch(increase(id))} />
      <BiTrashAlt onClick={() => dispatch(remove(id))} />
    </div>
  )
}

export default CartItem
