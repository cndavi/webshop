import FormButton from '../FormButton'
import { Link } from 'react-router-dom'
import styles from './Form.module.scss'

const Form = ({ btnTitle }) => {
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
              <input type='email' required />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input type='password' required />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__space}>
                <div className={styles.form__group__space__item}>
                  <label>
                    <Link to='/register'>Not an account yet?</Link>
                  </label>
                </div>
                <div className={styles.form__group__space__item}>
                  <Link to='/reset'>Forgot Password?</Link>
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
              <input type='email' required />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input type='password' required />
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
            <FormButton btnTitle={btnTitle} />
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
