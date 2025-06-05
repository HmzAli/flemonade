import Layout from '../../components/Layout'
import './Partner.scss'

function Partner() {
  return (
    <Layout>
      <div className="partner main-section">
        <div className="container">
          <h2 className="main-section__title">Partner With Us</h2>
          
          <div className="partner-content text-center">
            <p className="lead mb-4">
              Looking to serve Flemonade at your café, office, or event?<br />
              We offer wholesale rates, custom orders & chill delivery.<br />
              Let's make your menu more zesty.
            </p>

            <div className="cta-wrapper">
              <a 
                target="_blank" 
                href="https://wa.me/+601111474404" 
                className="btn btn-dark"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Partner 