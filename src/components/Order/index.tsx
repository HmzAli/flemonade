import Cta from "../Cta";
import "./Order.scss"

interface OrderProps {
  className?: string;
}

const Order = ({ className }: OrderProps) => {
  return (
    <section className={`order main-section ${className || ''}`}>
      <img src="./bottle-silhouette-yellow.png" className="section-sep" />

      <div className="container">
        <h2 className="main-section__title">Ready to refresh your day?</h2>
        
        <div className="cta-section">
          <p className="order-info">
            Hit the button below to pre-order via WhatsApp.
          </p>

          <Cta text="order on whatsapp" link="https://wa.me/+601111474404" variant="dark" icon="whatsapp" />
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