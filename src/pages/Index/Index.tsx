import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Products from '../../components/Products'
import Process from '../../components/Process'
import Testimonials from '../../components/Testimonials'
import Order from '../../components/Order'
import './Index.scss'
import { Helmet } from 'react-helmet'

function Index() {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>FLEMONADE</title>
          <link rel="canonical" href="https://flemonade.com" />
          <meta name="description" content="Premium home-made lemonade" />
      </Helmet>

      <MainBanner />
      <Products />
      <Process />
      <Testimonials />
      <Order />
    </Layout>
  )
}

export default Index
