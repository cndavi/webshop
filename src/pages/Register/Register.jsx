import styles from './Register.module.scss'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Register = () => {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.register__image}></div>
        <div className={styles.register__content}>
          <Card
            btnTitle='Create account'
            heading='Create account'
            cardTitle='Create account'
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default Register
