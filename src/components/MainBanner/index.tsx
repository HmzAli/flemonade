import "./MainBanner.scss"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1 className="tagline__title" data-aos="fade-in" data-aos-duration="500">HOME MADE LEMONADE</h1>
           <p className="tagline__description" data-aos="fade-in" data-aos-duration="800">Premium Taste. Made for Everyone.</p>
        </div>
      </div>

      <figure className="banner-image" data-aos="fade-in" data-aos-duration="200">
        <img src="./main-banner.webp" alt="flemonade" />
      </figure>

      <figure className="product-image" data-aos="fade-in" data-aos-duration="800">
        <img src="./bottle-in-ice.webp" alt="product image" />
      </figure>
    </section>
  )
}

export default MainBanner 