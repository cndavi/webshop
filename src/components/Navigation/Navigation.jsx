import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { VscThreeBars } from 'react-icons/vsc'
import { FiShoppingCart } from 'react-icons/fi'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import Cart from '../Cart/Cart'
import styles from './Navigation.module.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const { totalCount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 991 && showMenu) {
      setShowMenu(false)
    }
  }, [size.width, showMenu])

  const menuToggleHandler = () => {
    setShowMenu((prev) => !prev)
  }

  const openCart = () => {
    setShowCart((prev) => !prev)
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__content}>
          <Link to='/' className={styles.navbar__content__logo}>
            <h3>Vinyl Box</h3>
          </Link>

          <nav
            className={`${styles.navbar__content__links} ${
              showMenu ? styles.isMenu : ''
            }`}
          >
            <ul>
              <li>
                <Link to='/' onClick={menuToggleHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/products' onClick={menuToggleHandler}>
                  Products
                </Link>
              </li>
              <li>
                <Link to='/contact' onClick={menuToggleHandler}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.navbar__content__cart}>
            <Link to='#'>
              <Badge badgeContent={totalCount} color='primary'>
                <FiShoppingCart onClick={openCart} />
              </Badge>
              <Cart showCart={showCart} setShowCart={setShowCart} />
            </Link>
          </div>

          <div className={styles.navbar__content__account}>
            <Link to='/account'>
              <VscAccount />
            </Link>
          </div>

          <div className={styles.navbar__content__toggle}>
            {!showMenu ? (
              <VscThreeBars onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
