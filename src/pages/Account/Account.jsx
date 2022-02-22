import styles from './Account.module.scss'
import Footer from '../../components/Footer'
import { useRef } from 'react'

const Account = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <>
      <div className={styles.account}>
        <div className={styles.account__image}>
          <img
            src={require('../../assets/images/heading/img3.jpg')}
            alt='Records'
          />
        </div>
        <div className={styles.account__content}>
          <div className={styles.account__content__wrapper}>
            <h1 className={styles.account__content__wrapper__title}>
              MY ACCOUNT
            </h1>
            <div className={styles.account__content__wrapper__content}>
              <div className={styles.account__content__wrapper__content__card}>
                <div
                  className={
                    styles.account__content__wrapper__content__card__header
                  }
                >
                  Login
                </div>
                <div
                  className={
                    styles.account__content__wrapper__content__card__content
                  }
                >
                  <form className={styles.form}>
                    <div className={styles.form__group}>
                      <div className={styles.form__group__header}>
                        <label>Email</label>
                      </div>
                      <input type='email' required ref={emailRef} />
                    </div>
                    <div className={styles.form__group}>
                      <div className={styles.form__group__header}>
                        <label>Password</label>
                      </div>
                      <input type='password' ref={passwordRef} required />
                    </div>

                    <div className={styles.form__group}>
                      <div className={styles.form__group__space}>
                        <div className={styles.form__group__space__item}>
                          <label
                            className={styles.form__group__space__item__label}
                          >
                            <div
                              className={
                                styles.form__group__space__item__checkbox
                              }
                            >
                              REMEMBER ME
                            </div>
                          </label>
                        </div>
                        <div className={styles.form__group__space__item}>
                          <div>FORGOT PASSWORD?</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.form__group}>
                      <div className={styles.form__group__btn}>
                        <button type='submit'>Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className={styles.account__content__wrapper__content__card}>
                <div
                  className={
                    styles.account__content__wrapper__content__card__header
                  }
                >
                  Create account
                </div>
                <div
                  className={
                    styles.account__content__wrapper__content__card__content
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
