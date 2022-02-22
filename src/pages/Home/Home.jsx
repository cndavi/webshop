import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className='carousel'>
        <Carousel />
      </section>
      <Footer />
    </>
  )
}

export default Home
