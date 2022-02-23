import styles from './Register.module.scss'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Register = ({ setPassword, setEmail, handleAction }) => {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.register__image}>
          <img
            src={require('../../assets/images/heading/img2.jpg')}
            alt='Records'
          />
        </div>
        <div className={styles.register__content}>
          <Card
            btnTitle='Create account'
            heading='Create account'
            cardTitle='Create account'
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

export default Register
