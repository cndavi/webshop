import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <h2>404</h2>
      <p>Page not found</p>
    </div>
  )
}

export default NotFoundPage
