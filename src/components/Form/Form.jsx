import FormButton from '../FormButton'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import styles from './Form.module.scss'

const Form = ({ btnTitle, setPassword, setEmail, handleAction }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {btnTitle === 'Login' ? (
          <>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Email</label>
              </div>
              <input
                type='email'
                ref={emailRef}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input
                type='password'
                ref={passwordRef}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__space}>
                <div className={styles.form__group__space__item}>
                  <label>
                    <Link to='/register'>Not an account yet?</Link>
                  </label>
                </div>
                <div className={styles.form__group__space__item}>
                  <p>Forgot Password?</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>First Name</label>
              </div>
              <input type='text' required />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Last Name</label>
              </div>
              <input type='text' required />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Email</label>
              </div>
              <input
                type='email'
                ref={emailRef}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input
                type='password'
                ref={passwordRef}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__space}>
                <div className={styles.form__group__space__item}>
                  <label>
                    <Link to='/account'>Back to login page?</Link>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        <div className={styles.form__group}>
          <div className={styles.form__group__btn}>
            <FormButton btnTitle={btnTitle} handleAction={handleAction} />
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
