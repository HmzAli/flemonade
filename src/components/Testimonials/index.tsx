import "./Testimonials.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kak Ira",
      content: "Tak sangka lemonade boleh sesedap ni"
    },
    {
      name: "En Amin",
      content: "RM5 je?? Gila repeat"
    },
    {
      name: "Faruq",
      content: "My whole office is hooked! Siapa tak order, rugi"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false
  }

  return (
    <div className="testimonials main-section">
      <img src="./bottle-silhouette-white.png" className="section-sep" />

      <h2 className="main-section__title" data-content-id="testimonials-section-title">What Our Customers Say</h2>

      <div className="testimonial-wrapper" data-aos="fade-in" data-aos-duration="500" >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="item-wrapper">
              <div key={index} className="testimonials__item">
                <p className="testimonials__content">"{testimonial.content}"</p>
                <h5 className="testimonials__name">{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials 