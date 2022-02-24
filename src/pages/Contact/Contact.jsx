import styles from './Contact.module.scss'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__image}></div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default Contact
