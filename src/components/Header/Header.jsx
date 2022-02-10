import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { HiShoppingBag } from 'react-icons/hi'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Icons from '../../elements/Icons'
import styles from './Header.module.scss'

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
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to='/' className={styles.header__content__logo}>
          <h2>logo</h2>
        </Link>
        <nav
          className={`${styles.header__content__navbar} ${
            menuOpen ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link
                to='/shopping-bag'
                className={styles.header__content__navbar__bag}
              >
                <Icons Icon={HiShoppingBag} size={30} /> <span>0</span>
              </Link>
            </li>
            <li>
              <Link
                to='/account'
                className={styles.header__content__navbar__account}
              >
                <Icons Icon={MdAccountCircle} size={30} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
