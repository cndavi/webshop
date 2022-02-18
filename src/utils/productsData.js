import record1 from '../assets/images/recordPlayers/img1.jpg'
import record2 from '../assets/images/recordPlayers/img2.jpg'
import record3 from '../assets/images/recordPlayers/img3.jpg'
import record4 from '../assets/images/recordPlayers/img4.jpg'
import record5 from '../assets/images/recordPlayers/img5.jpg'
import record6 from '../assets/images/recordPlayers/img6.jpg'

import vinyl1 from '../assets/images/records/img1.jpg'
import vinyl2 from '../assets/images/records/img2.jpg'
import vinyl3 from '../assets/images/records/img3.jpg'

import { v4 as uuidv4 } from 'uuid'

export const productsData = [
  {
    id: uuidv4(),
    title: 'Kurt Cobain',
    price: 2150,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record1,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Amy Winehouse',
    price: 1800,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record2,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Jim Morrison',
    price: 1950,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record3,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Miles Davis Quintet',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: vinyl1,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'The Act',
    price: 45,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: vinyl2,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Her',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: vinyl3,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Jimi Hendrix',
    price: 2400,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record4,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'David Bowie',
    price: 2750,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record5,
    amount: 0,
  },
  {
    id: uuidv4(),
    title: 'Cherie Currie',
    price: 1750,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: record6,
    amount: 0,
  },
]
