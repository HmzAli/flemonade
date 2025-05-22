import Layout from '../../components/Layout'
import './Theme.scss'

function Theme() {
  return (
    <Layout>
      <section className="theme-page">
        <div className="container">
          <h1>Theme</h1>
          {/* Add your theme content here */}

          <h1 className="tagline">MAIN HEADING</h1>

          <h2>Subheading</h2>

          <h3>Subheading</h3>

          <h4>Subheading</h4>



          <p className="tagline-description">Helping your brand stand out</p>

          <p style={{ width: '500px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis sapiente in, molestiae libero architecto nulla possimus illum vero commodi suscipit consectetur nemo laboriosam optio atque aliquam est sunt pariatur!</p>
          

          <div className="btn-container">
            <button className="btn btn-primary">Order Now</button>
          </div>

          <div className="btn-container">
            <button className="btn btn-outline">Order later</button>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Theme 