import "./Flavours.scss"

const Flavours = () => {
  return (
    <section className="flavours main-section" id="flavours">
      <img src="./bottle-silhouette-white.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title" data-content-id="flavour-section-title"><a href="#flavours">EXPLORE FALVOURS</a></h2>
        
        <div className="flavour-wrapper">
          <div className="row">
            <div className="col-md-5">
              <figure className="product-bottle">
                <img src="./flemonade--original.png" alt="original" />
              </figure>
            </div>

            <div className="col-md-7">
              <div className="content-wrapper" data-content-id="flavour-desc">
                <h2> ORIGINAL </h2>

                <div className="flavour-body">
                  <p>Our signature Original Lemonade captures the essence of pure refreshment. Made with freshly squeezed lemons, carefully balanced for the perfect harmony of tangy zest and gentle sweetness. Each sip offers a crisp, invigorating taste. The ultimate thirst-quenching experience for KL's tropical heat.</p>
                </div>

                <div className="flavour-variation">
                  <h4>VARIATIONS</h4>
                  <ul>
                    <li>Plain</li>
                    <li>Sparkling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flavour-wrapper">
          <div className="row">
            <div className="col-md-5">
              <figure className="product-bottle">
                <img src="./flemonade--asam-boi.png" alt="original" />
              </figure>
            </div>

            <div className="col-md-7">
              <div className="content-wrapper" data-content-id="flavour-desc">
                <h2> ASAM BOI </h2>

                <div className="flavour-body">
                  <p>Our signature Original Lemonade captures the essence of pure refreshment. Made with freshly squeezed lemons, carefully balanced for the perfect harmony of tangy zest and gentle sweetness. Each sip offers a crisp, invigorating taste. The ultimate thirst-quenching experience for KL's tropical heat.</p>
                </div>

                <div className="flavour-variation">
                  <h4>VARIATIONS</h4>
                  <ul>
                    <li>Plain</li>
                    <li>Sparkling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flavours 