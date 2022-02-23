import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__image}>
          <img
            src={require('../../assets/images/heading/img3.jpg')}
            alt='Records'
          />
        </div>
      </div>
    </>
  )
}

export default Contact
