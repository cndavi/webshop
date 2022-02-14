import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { VscThreeBars } from 'react-icons/vsc'
import { HiShoppingBag } from 'react-icons/hi'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import Modal from '../Modal/Modal'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

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

  const openModal = () => {
    setShowModal((prev) => !prev)
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
              <HiShoppingBag onClick={openModal} />
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </Link>
          </div>

          <div className={styles.navbar__content__account}>
            <Link to='/account'>
              <MdAccountCircle />
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
