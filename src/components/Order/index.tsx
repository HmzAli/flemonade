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
          <p className="order-info" data-aos="fade-in" data-aos-duration="500">
            Hit the button below to pre-order via WhatsApp.
          </p>

          <div data-aos="fade-in" data-aos-duration="500">
            <Cta text="order on whatsapp" link="https://wa.me/+601111474404" variant="dark" icon="whatsapp"/>
          </div>
        </div>

        <div className="delivery-wrapper">
          <div className="pickup-info"> 
            <h5>Pickup & Delivery</h5>
            <p>All orders are currently <strong>self-pickup only</strong> at our base in <a className="text-link" target="_blank" href="https://maps.app.goo.gl/LFw2PWNYikXiZR3q6">SME Bank HQ</a>. </p>
            
            <p>We can also arrange pickup at <a className="text-link" target="_blank" href="https://maps.app.goo.gl/zVM4menenb1ZPdLr8">Surau Al Amirin Seksyen 4 Bandar Baru Bangi</a>.</p>
          </div>

          <div className="delivery-info">
            <h5>Delivery</h5>
              <p>Need delivery? We offer it for <strong>orders RM100+</strong>. </p>
            
              <p>DM us to check availability for bulk or out-of-area delivery.</p>

              <small><strong>NOTE:</strong> Delivery charges to be <strong>covered by customer</strong> (via Lalamove, Grab, etc).</small>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Order 