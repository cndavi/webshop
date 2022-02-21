import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './components/NotFoundPage'
import Account from './pages/Account'
import ScrollToTop from './utils/scrollToTop'

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
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
