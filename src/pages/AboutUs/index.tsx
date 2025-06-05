import Layout from '../../components/Layout'
import Order from '../../components/Order'
import './AboutUs.scss'

function AboutUs() {
  return (
    <Layout>
      <div className="about-us main-section" data-aos="fade-in" data-duration="500">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2> Our Story </h2>
          
              <p>Our story begins in a humble home kitchen in Bangi, where Flemonade was born from a simple desire to create something pure and refreshing. We believe in keeping things real – every bottle is crafted with genuine lemons and premium sugar, no artificial flavors, no shortcuts, no bullshit.</p>

              <p>Every batch is still made by hand because we believe that care can't be automated. Our small-batch approach lets us control every aspect of the process, from selecting the juiciest lemons to achieving that perfect balance of sweet and tart.</p>

              <p>We make Flemonade because we care about what goes into your glass. From our kitchen in Bangi to your table, we're committed to honest craftsmanship and genuine flavor.</p>
            </div>

            <div className="col-md-6">
              <figure className="image-story">
                <img src="/story.webp" alt="Story" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <Order className="mt-5" />
    </Layout>
  )
}

export default AboutUs 