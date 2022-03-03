import styles from './Account.module.scss'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../../firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'

const Account = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setFirstName(data.firstName)
      setLastName(data.lastName)
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }
  }

  useEffect(() => {
    if (!user) return navigate('/')
    fetchUserName()
  }, [user, navigate])

  return (
    <>
      <div className={styles.account}>
        <h2 className={styles.account__heading}>
          Welcome {firstName} {lastName}!
        </h2>
        <button className={styles.account__btn} onClick={logout}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Account
