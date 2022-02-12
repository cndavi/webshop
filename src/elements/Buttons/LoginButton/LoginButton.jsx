import { MdAccountCircle } from 'react-icons/md'
import styles from './LoginButton.module.scss'
import Icons from '../../Icons'

const LoginButton = () => {
  return (
    <>
      <div className={styles.loginButton}>
        <Icons Icon={MdAccountCircle} size={30} />
      </div>
    </>
  )
}

export default LoginButton
