import { scroller } from 'react-scroll'

const handleScroll = () => {
  scroller.scrollTo('carousel', {
    duration: 1500,
    delay: 0,
    smooth: 'ease',
  })
}

export default handleScroll
