import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__container__grid}>
        <div className={styles.footer__container__grid__left}>
          <div className={styles.footer__container__grid__left__mail}>
            <Link to='/'>
              <AiOutlineMail />
              <span>vinyl-box@box.com</span>
            </Link>
          </div>
          <div className={styles.footer__container__grid__left__phone}>
            <Link to='/'>
              <AiOutlinePhone />
              <span>+31234567891</span>
            </Link>
          </div>
        </div>
        <div className={styles.footer__container__grid__right}>
          <span className={styles.footer__container__grid__right__copyright}>
            Designed and built by Carolyn Ndavi © 2022
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
