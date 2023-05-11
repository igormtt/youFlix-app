import Slider from 'react-slick'
import './Carousel.css'

// eslint-disable-next-line react/prop-types
export default function Carousel({ children }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700, 
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 3
  }

  return(
    <div>
      <Slider {...settings} >
        { children }
      </Slider>
    </div>
  )
}