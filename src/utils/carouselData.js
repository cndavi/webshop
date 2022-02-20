import { v4 as uuidv4 } from 'uuid'
import img1 from '../assets/images/carousel/img1.jpg'
import img2 from '../assets/images/carousel/img2.jpg'
import img3 from '../assets/images/carousel/img3.jpg'
import img4 from '../assets/images/carousel/img4.jpg'

export const carouselData = [
  {
    id: uuidv4(),
    title: 'The Strokes',
    subTitle: 'Lorem',
    image: img1,
  },
  {
    id: uuidv4(),
    title: 'The Act',
    subTitle: 'Lorem',
    image: img2,
  },

  {
    id: uuidv4(),
    title: 'Her',
    subTitle: 'Lorem',
    image: img3,
  },
  {
    id: uuidv4(),
    title: 'Miles Davis Quintet',
    subTitle: 'Lorem',
    image: img4,
  },
]
