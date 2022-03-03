import styles from './Contact.module.scss'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__image}></div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__wrapper__content}>
            <div className={styles.card__wrapper__content__card}>
              <p className={styles.card__wrapper__content__card__title}>
                Customer Service:
              </p>
              <p className={styles.card__wrapper__content__card__content}>
                Don't hesitate to email <span>vinyl-box@box.com</span> with any
                questions and/or comments. You'll be speaking directly with us,
                and you can expect a response within 1 business day! Please be
                sure to provide your order number and any other relevant
                information when contacting. Thank you!
              </p>
              <p className={styles.card__wrapper__content__card__title}>
                Business Inquiries:
              </p>
              <p className={styles.card__wrapper__content__card__content}>
                For inquiries regarding wholesale, collaborations and press,
                please email <span>vinyl-box@box.com</span>. We look forward to
                hearing from you! Talk soon, Vinyl Box
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default Contact
