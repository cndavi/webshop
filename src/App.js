import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Account from './pages/Account/Account'
import Register from './pages/Register'
import NotFoundPage from './components/NotFoundPage'
import ScrollToTop from './utils/scrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { app } from './firebase-config'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAction = (id) => {
    const authentication = getAuth()
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          console.log(response)
        }
      )
    }
  }

  return (
    <Router>
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route
            exact
            path='/account'
            element={
              <Account
                handleAction={() => handleAction(1)}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            }
          />
          <Route
            exact
            path='/register'
            element={
              <Register
                handleAction={() => handleAction(2)}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
