import Layout from '../../components/Layout'
import Order from '../../components/Order'
import { Helmet } from 'react-helmet';

import './AboutUs.scss'

function AboutUs() {
  return (
    <Layout>
      <div className="about-us main-section" data-aos="fade-in" data-duration="500">
        <Helmet>
            <meta charSet="utf-8" />
            <title>About Us - FLEMONADE</title>
            <link rel="canonical" href="https://flemonade.com/about-us" />
            <meta name="description" content="Discover the story behind Flemonade — born from a home kitchen in Bangi, inspired by love for fresh, healthy lemonade. Honest ingredients, handcrafted in small batches." />
        </Helmet>
            
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2> Our Story </h2>

              <p>Flemonade was born in a humble home kitchen in Bangi, sparked by something deeply personal — our founder’s parents love lemonade, but could never find one that was truly fresh, healthy, and unprocessed. Most drinks on the shelves were full of artificial flavorings, preservatives, and sugar overload. So we set out to change that.</p>

              <p>We believe in keeping things real — every bottle of Flemonade is made with genuine lemons, premium sugar, and zero shortcuts. No artificial flavors. No preservatives.</p>

              <p>Our small-batch, handcrafted approach allows us to obsess over the details — from selecting the juiciest lemons to getting that perfect sweet-tart balance in every sip. We still make Flemonade by hand, because we believe care can’t be automated.</p>

              <p>From our kitchen in Bangi to your table, Flemonade is built on honest craftsmanship, bold flavors, and a mission to give everyone a taste of something real.</p>
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