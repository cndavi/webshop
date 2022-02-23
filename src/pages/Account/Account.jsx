import styles from './Account.module.scss'
import Login from '../../components/Login/'
import Footer from '../../components/Footer'

const Account = () => {
  return (
    <>
      <div className={styles.account}>
        <div className={styles.account__image}>
          <img
            src={require('../../assets/images/heading/img3.jpg')}
            alt='Records'
          />
        </div>
        <Login />
      </div>
      <Footer />
    </>
  )
}

export default Account
