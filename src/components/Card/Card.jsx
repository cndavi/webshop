import Form from '../Form'
import styles from './Card.module.scss'

const Card = ({ btnTitle, cardTitle, setPassword, setEmail, handleAction }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__wrapper__content}>
            <div className={styles.card__wrapper__content__card}>
              <div className={styles.card__wrapper__content__card__header}>
                {cardTitle}
              </div>
              <div className={styles.card__wrapper__content__card__content}>
                <Form
                  btnTitle={btnTitle}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={handleAction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
