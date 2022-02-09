import styles from './Icons.module.scss'

const Icons = ({ Icon, size }) => {
  return <>{Icon && <Icon className={styles.header__icon} size={size} />}</>
}

export default Icons
