import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ShoppingBag from './pages/ShoppingBag'
import Account from './pages/Account'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shopping-bag' element={<ShoppingBag />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App
