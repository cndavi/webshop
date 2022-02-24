import styles from './Account.module.scss'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Account = () => {
  return (
    <>
      <div className={styles.account}>
        <div className={styles.account__image}></div>
        <div className={styles.account__content}>
          <Card btnTitle='Login' heading='My account' cardTitle='Login' />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default Account
