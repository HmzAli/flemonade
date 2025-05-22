import "./MainBanner.scss"
import Video from "../Video"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1 className="tagline__title">FLEMONADE</h1>
           <p className="tagline__description">Premium homemade lemonade for busy professionals</p>
        </div>
      </div>
      <Video />
    </section>
  )
}

export default MainBanner 