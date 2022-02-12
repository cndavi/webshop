import { HiShoppingBag } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import styles from './CartButton.module.scss'
import Icons from '../../Icons'

const CartButton = () => {
  return (
    <>
      <div className={styles.cartButton}>
        <Icons Icon={HiShoppingBag} size={30} />
      </div>
    </>
  )
}

export default CartButton
