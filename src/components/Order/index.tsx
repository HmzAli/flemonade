import "./Order.scss"

const Order = () => {
  return (
    <section className="order main-section">
      <img src="./bottle-silhouette-yellow.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title">Ready to refresh your day?</h2>
        
        <div className="cta-wrapper">
          <p className="order-info">
            Hit the button below to pre-order via WhatsApp.
          </p>
          
          <a target="_blank" href="https://wa.me/+601111474404" className="btn btn-dark">Order on whatsapp</a>
        </div>

        <div className="pickup-date">
          <h5>Next pick-up</h5>
          <p>Tuesday, 7 May @ Level 6, 9–12pm</p>
        </div>
      </div>
    </section>
  )
}

export default Order 