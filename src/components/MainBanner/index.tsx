import "./MainBanner.scss"

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline">
           <h1 className="tagline__title">FLEMONADE</h1>
           <p className="tagline__description">Refreshing homemade lemonade for office </p>
        </div>
      </div>

      <figure className="banner-video">
        <video src="./flemonade-banner.mp4" autoplay="true" muted={true} loop={true}></video>
      </figure>
    </section>
  )
}

export default MainBanner 