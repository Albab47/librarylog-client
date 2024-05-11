import SlideContent from "./SlideContent";
import Slider1Img from '../../assets/slider1.png';
import Slider2Img from '../../assets/slider2.png';
import Slider3Img from '../../assets/slider3.png';

const sliders = [
  {
    title: "Welcome to LibraryLog",
    text: "Explore our vast collection of books spanning various genres and subjects. Immerse yourself in a world of knowledge and discovery.",
    img: Slider1Img,
  },
  {
    title: "Discover New Worlds",
    text: "Dive into our shelves filled with classics, bestsellers, and academic resources. Whether you seek adventure, enlightenment, or academic excellence, you'll find it here.",
    img: Slider2Img,
  },
  {
    title: "Empowering Education",
    text: "Our library is more than just a collection of books; it's a gateway to knowledge and a catalyst for growth. Borrow, learn, and expand your horizons with us",
    img: Slider3Img,
  },
];

const HeroSlider = () => {
  return (
    <section className="bg-yellow-100">
      <swiper-container
        class="mySwiper"
        loop="true"
        centered-slides="true"
        autoplay-delay="4000"
        autoplay-disable-on-interaction="false"
      >
        {sliders?.map((slider, idx) => (
          <swiper-slide key={idx}>
            <SlideContent slider={slider} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default HeroSlider;
