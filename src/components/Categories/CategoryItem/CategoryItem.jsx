import styles from './CategoryItem.module.scss'

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.categoryItem}>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  )
}

export default CategoryItem
