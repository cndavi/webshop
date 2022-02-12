import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { VscThreeBars } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import CartButton from '../../elements/Buttons/CartButton'
import LoginButton from '../../elements/Buttons/LoginButton'
import styles from './Navigation.module.scss'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
    if (size.width > 991 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__content}>
          <Link to='/' className={styles.navbar__content__logo}>
            <h2>logo</h2>
          </Link>

          <nav
            className={`${styles.navbar__content__links} ${
              menuOpen ? styles.isMenu : ''
            }`}
          >
            <ul>
              <li>
                <Link to='/' onClick={menuToggleHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/product' onClick={menuToggleHandler}>
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

          <div className={styles.navbar__content__icons}>
            <div className={styles.navbar__content__icons__cart}>
              <Link to='/cart'>
                <CartButton />
              </Link>
            </div>
            <div className={styles.navbar__content__icons__account}>
              <Link to='/account'>
                <LoginButton />
              </Link>
            </div>
          </div>

          <div className={styles.navbar__content__toggle}>
            {!menuOpen ? (
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
