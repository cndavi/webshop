import styles from './Categories.module.scss'
import CategoryItem from './CategoryItem'
import { categoriesData } from '../../utils/categoriesData'

const Categories = () => {
  return (
    <div className={styles.categories}>
      {categoriesData.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  )
}

export default Categories
