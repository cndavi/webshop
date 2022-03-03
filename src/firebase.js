import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
  console.log(email)
  console.log(password)
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
  }
}

const registerWithEmailAndPassword = async (
  firstName,
  lastName,
  email,
  password
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      firstName,
      lastName,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err) {
    console.error(err)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
