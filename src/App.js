import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDescription from './pages/Products/ProductDescription'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
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
          <Route exact path='/products/:id' element={<ProductDescription />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/account' element={<Account />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
