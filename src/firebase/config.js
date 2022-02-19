import { initializeApp } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA2ebYQpOtlVgi_DW6BHNhlbziuS7WYJxw',
  authDomain: 'vinyl-box.firebaseapp.com',
  projectId: 'vinyl-box',
  storageBucket: 'vinyl-box.appspot.com',
  messagingSenderId: '265714335037',
  appId: '1:265714335037:web:0d6600e202610d7216d954',
}

const app = initializeApp(firebaseConfig)
const dataBase = getFireStore(app)

export default dataBase
