import styles from './NotFoundPage.module.scss'
import Footer from '../Footer'

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.error}>
        <h2>404</h2>
        <p>Page not found</p>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
