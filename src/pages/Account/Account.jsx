import styles from './Account.module.scss'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Account = ({ setPassword, setEmail, handleAction }) => {
  return (
    <>
      <div className={styles.account}>
        <div className={styles.account__image}>
          <img
            src={require('../../assets/images/heading/img2.jpg')}
            alt='Records'
          />
        </div>
        <div className={styles.account__content}>
          <Card
            btnTitle='Login'
            heading='My account'
            cardTitle='Login'
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={handleAction}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
