import "./Process.scss"

const Process = () => {
  return (
    <section className="process main-section">
      <img src="./bottle-silhouette-yellow.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title"> Ingredients </h2>

        <div className="row sub-section">
          <div className="col-md-5">
            <figure className="image-wrapper" data-aos="fade-in" data-aos-duration="1000">
              <img src="./lemon-crate.webp" alt="lemon crate" />
            </figure>
          </div>

          <div className="col-md-7">
            <div className="content-wrapper" data-aos="fade-in" data-aos-duration="800">
              <div>
                <p>
                We source premium ingredients from KL's best supermarkets. Each of the ingredients is hand-picked and meets our strict standards for freshness and flavor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row sub-section" data-aos-delay="2000">
          <div className="col-md-5">
            <figure className="image-wrapper" data-aos="fade-in" data-aos-duration="1000">
              <img src="./asam-boi.webp" alt="asam boi" />
            </figure>
          </div>

          <div className="col-md-7">
            <div className="content-wrapper content-left" data-aos="fade-in" data-aos-duration="800">
              <p>
              Our ingredients are prepared fresh daily to preserve maximum taste. Both lemonade variants showcase quality ingredients crafted for that perfect refreshing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 