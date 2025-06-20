import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Products from '../../components/Products'
import Process from '../../components/Process'
import Testimonials from '../../components/Testimonials'
import Order from '../../components/Order'
import './Index.scss'
import ComingSoon from '../ComingSoon'

function Index() {
  return (
    <Layout>
      <ComingSoon />
      {/* <MainBanner />
      <Products />
      <Process />
      <Testimonials />
      <Order /> */}
    </Layout>
  )
}

export default Index
