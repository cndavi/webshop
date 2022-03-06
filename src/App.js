import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './components/NotFoundPage'
import ScrollToTop from './utils/scrollToTop'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <ScrollToTop>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Dashboard role='Login' />} />
        <Route exact path='/reset' element={<Dashboard role='Reset' />} />
        <Route exact path='/register' element={<Dashboard role='Register' />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ScrollToTop>
  )
}

export default App
