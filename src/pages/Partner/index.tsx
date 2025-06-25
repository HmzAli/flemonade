import { Helmet } from 'react-helmet'
import Cta from '../../components/Cta'
import Layout from '../../components/Layout'
import './Partner.scss'

function Partner() {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Partner With Us - FLEMONADE</title>
          <link rel="canonical" href="https://flemonade.com/partner" />
          <meta name="description" content="Interested in retailing or serving Flemonade? Partner with us for wholesale supply, cafe collaborations, or event catering in Kuala Lumpur and Selangor." />
      </Helmet>

      <div className="partner main-section" data-aos="fade-in" data-aos-duration="500">
        <div className="container">
          <h2 className="text-center">Partner With Us</h2>
          
          <div className="partner-content text-center">
            <p className="lead mb-4">
              Looking to serve Flemonade at your café, office, or event?<br />
              We offer wholesale rates, custom orders & chill delivery.<br />
              Let's make your menu more zesty.
            </p>

            <Cta text="Partner with us" link="https://wa.me/+601111474404" variant="secondary" icon="whatsapp" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Partner 