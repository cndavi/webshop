import styles from './Dashboard.module.scss'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Dashboard = ({ role }) => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboard__image}></div>
        <div className={styles.dashboard__content}>
          <Card cardTitle={role} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
