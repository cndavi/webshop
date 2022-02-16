import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
  return (
    <div className={styles.cartEmpty}>
      <p>You have no items in your shopping cart.</p>
    </div>
  )
}

export default CartEmpty
