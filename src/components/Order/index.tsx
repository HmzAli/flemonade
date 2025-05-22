import "./Order.scss"

const Order = () => {
  return (
    <section className="order main-section">
      <img src="./bottle-silhouette-black.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title">PLACE AN ORDER</h2>
        
        <div className="cta-wrapper">
          <a href="btn btn-primary">Order now</a>
        </div>
      </div>
    </section>
  )
}

export default Order 