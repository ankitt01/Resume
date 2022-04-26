import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Slider = () => {
    const items = [
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
    ]
  const responsive = {
    0: { items: 2 },
    512: { items: 3 },
    1024: {items: 4},
  };
  return (
    <div className='slider-container'>
      <AliceCarousel 
        autoPlay
        responsive={responsive}
        items={items}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        autoPlayInterval={1000}
        infinite
      />
    </div>
  )
}

export default Slider


