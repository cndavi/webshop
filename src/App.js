import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Account from './pages/Account/Account'
import Register from './pages/Register'
import NotFoundPage from './components/NotFoundPage'
import ScrollToTop from './utils/scrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
