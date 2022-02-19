import { v4 as uuidv4 } from 'uuid'
import img1 from '../assets/images/carousel/img1.jpg'
import img2 from '../assets/images/carousel/img2.jpg'
import img3 from '../assets/images/carousel/img3.jpg'
import img4 from '../assets/images/carousel/img4.jpg'
import img5 from '../assets/images/carousel/img5.jpg'

export const carouselData = [
  {
    id: uuidv4(),
    title: 'Kurt Cobain',
    subTitle: 'Lorem',
    image: img1,
  },
  {
    id: uuidv4(),
    title: 'Amy Winehous',
    subTitle: 'Lorem',
    image: img2,
  },
  {
    id: uuidv4(),
    title: 'Jim Morrison',
    subTitle: 'Lorem',
    image: img3,
  },
  {
    id: uuidv4(),
    title: 'Jimi Hendrix',
    subTitle: 'Lorem',
    image: img4,
  },
  {
    id: uuidv4(),
    title: 'David Bowie',
    subTitle: 'Lorem',
    image: img5,
  },
]
