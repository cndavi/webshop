import styles from './Form.module.scss'
import { useRef } from 'react'

const Form = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <>
      <form className={styles.form}>
        <div className={styles.form__group}>
          <div className={styles.form__group__header}>
            <label>Email</label>
          </div>
          <input type='email' ref={emailRef} required />
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
              <label className={styles.form__group__space__item__label}>
                <div className={styles.form__group__space__item__checkbox}>
                  Remember Me
                </div>
              </label>
            </div>
            <div className={styles.form__group__space__item}>
              <div>Forgot Password?</div>
            </div>
          </div>
        </div>

        <div className={styles.form__group}>
          <div className={styles.form__group__btn}>
            <button type='submit'>Login</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
