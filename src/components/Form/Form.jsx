import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../firebase'

import styles from './Form.module.scss'

const Form = ({ cardTitle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/account')
  }, [user, navigate])

  const register = () => {
    if (!firstName || !lastName) alert('Please enter name')
    registerWithEmailAndPassword(firstName, lastName, email, password)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {cardTitle === 'Login' ? (
          <>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Email</label>
              </div>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Last Name</label>
              </div>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Email</label>
              </div>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__header}>
                <label>Password</label>
              </div>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <div className={styles.form__group__space}>
                <div className={styles.form__group__space__item}>
                  <label>
                    <Link to='/login'>Back to login page?</Link>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        <div className={styles.form__group}>
          <div className={styles.form__group__btn}>
            {cardTitle === 'Login' ? (
              <button
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Login
              </button>
            ) : (
              <button onClick={register}>Register</button>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
