import { RiArrowDropDownLine } from 'react-icons/ri'
import Icons from '../Icons'
import styles from './ScrollToButton.module.scss'
import handleScroll from '../../utils/handleScroll'

const ScrollToButton = () => {
  return (
    <button className={styles.button} onClick={handleScroll}>
      <Icons Icon={RiArrowDropDownLine} size={60} />
    </button>
  )
}

export default ScrollToButton
