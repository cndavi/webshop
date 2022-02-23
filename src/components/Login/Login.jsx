import styles from './Login.module.scss'
import Form from '../Form'

const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__wrapper}>
          <h1 className={styles.login__wrapper__title}>My Account</h1>
          <div className={styles.login__wrapper__content}>
            <div className={styles.login__wrapper__content__card}>
              <div className={styles.login__wrapper__content__card__header}>
                Login
              </div>
              <div className={styles.login__wrapper__content__card__content}>
                <Form />
              </div>
            </div>
            <div className={styles.login__wrapper__content__card}>
              <div className={styles.login__wrapper__content__card__header}>
                Create Account
              </div>
              <div
                className={styles.login__wrapper__content__card__content}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
