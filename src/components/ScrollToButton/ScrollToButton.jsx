import styles from './ScrollToButton.module.scss'
import handleScroll from '../../utils/handleScroll'

const ScrollToButton = () => {
  return (
    <button className={styles.button} onClick={handleScroll}>
      <div className={styles.button__arrow}></div>
    </button>
  )
}

export default ScrollToButton
