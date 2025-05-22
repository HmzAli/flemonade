import "./MainBanner.scss"
import Video from "../Video"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1 className="tagline__title" data-aos="fade-in" data-aos-duration="100">FLEMONADE</h1>
           <p className="tagline__description" data-aos="fade-in" data-aos-duration="1000">Premium homemade lemonade for busy professionals</p>
        </div>
      </div>
      <Video />
    </section>
  )
}

export default MainBanner 