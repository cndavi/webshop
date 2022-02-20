import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <Footer />
    </>
  )
}

export default Home
