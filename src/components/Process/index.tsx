import "./Process.scss"

const Process = () => {
  return (
    <section className="process main-section">
      <img src="./bottle-silhouette-yellow.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title"> Ingredients </h2>

        <div className="ingredient-list row gx-0">
          <div className="col-sm-6">
            <div className="ingredient-item" data-aos="fade-in" data-aos-duration="800">
              <figure className="ingredient-icon">
                <img src="./lemon.png" alt="lemon" />
              </figure>

              <p className="ingredient-title">
                Fresh lemon
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="ingredient-item" data-aos="fade-in" data-aos-duration="1200">
              <figure className="ingredient-icon" >
                <img src="./syrup.png" alt="lemon" />
              </figure>

              <p className="ingredient-title">
                Premium sugar syrup
              </p>
            </div>
          </div>
        </div>

        <div className="ingredient-list row gx-0">
          <div className="col-sm-6">
            <div className="ingredient-item" data-aos="fade-in" data-aos-duration="1800">
              <figure className="ingredient-icon">
                <img src="./dried-plum.png" alt="asam boi" />
              </figure>

              <p className="ingredient-title">
                Real asam boi
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="ingredient-item" data-aos="fade-in" data-aos-duration="2400">
              <figure className="ingredient-icon">
                <img src="./pure-water.png" alt="pure water" />
              </figure>

              <p className="ingredient-title">
                Purified water
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 