import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <>
      <section className={styles.header}>
        <img
          src={require('../../assets/images/heading/img2.jpg')}
          alt='Records'
        />
      </section>
      <div className={styles.contact}>
        {/* <img
          src={require('../../assets/images/heading/img4.jpg')}
          alt='Records'
        /> */}
      </div>
    </>
  )
}

export default Contact
