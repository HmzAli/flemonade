import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./Products.scss"
import Cta from '../Cta'

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        autoplaySpeed: 3000,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="products main-section" id="products">
      <img src="./bottle-silhouette-white.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title" data-content-id="product-section-title"><a href="#products">EXPLORE PRODUCTS</a></h2>
        
        <Slider {...settings}>
          <div className="product-wrapper" data-aos="fade-in" data-aos-duration="1000">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-5">
                  <div className="figure-wrapper">
                    <img src="./lemon.webp" className="image-secondary" />

                    <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                      <img src="./flemonade--original.webp" alt="original" />
                    </figure>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h2> ORIGINAL </h2>

                    <div className="product-body">
                      <div className="row">
                        <div className="col-4">150 ml </div>
                        <div className="col"><span className="price">RM 2.50</span></div>
                      </div>

                      <div className="row">
                        <div className="col-4">450 ml </div>
                        <div className="col"><span className="price">RM 6.00</span></div>
                      </div>
                    </div>

                    <div className="product-desc">
                      <div className="product-caption">
                      Freshly squeezed lemons blended with purified water and premium sugar for perfect balance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-wrapper" data-aos="fade-in" data-aos-duration="1000">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-5">
                  <div className="figure-wrapper">
                    <img src="./asam-boi.png" alt="asam-bai" className="image-secondary" />
                    <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                      <img src="./flemonade--asam-boi.webp" alt="original" />
                    </figure>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h2> ASAM BOI </h2>

                    <div className="product-body">
                      <div className="row">
                        <div className="col-4">150 ml </div>
                        <div className="col"><span className="price">RM 2.50</span></div>
                      </div>

                      <div className="row">
                        <div className="col-4">450 ml </div>
                        <div className="col"><span className="price">RM 6.00</span></div>
                      </div>
                    </div>

                    <div className="product-desc">
                      <div className="product-caption">
                      Zesty lemons combined with authentic asam boi and premium sugar for bold tangy flavor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-wrapper" data-aos="fade-in" data-aos-duration="1000">
            <div className="product-inner item-card">
              <div className="row gx-0">
                <div className="col-md-5">
                  <div className="figure-wrapper">
                    <img src="./sparkling.png" alt="asam-bai" className="image-secondary" />

                    <figure className="product-image" data-aos="fade-in" data-aos-duration="1000">
                      <img src="./flemonade--sparkling.webp" alt="original" />
                    </figure>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="content-wrapper" data-content-id="product-desc" data-aos="fade-in" data-aos-duration="800">
                    <h2> Sparkling </h2>

                    <div className="product-body">
                      <div className="row">
                        <div className="col-4">450 ml </div>
                        <div className="col"><span className="price">RM 6.50</span></div>
                      </div>
                    </div>

                    <div className="product-desc">
                      <div className="product-caption">
                      Sparkling original flavour lemonade with fizz taking your refreshment next level
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <Cta text="order on whatsapp" link="https://wa.me/+601111474404" variant="secondary" icon="whatsapp" />
      </div>
    </section>
  )
}

export default Products 