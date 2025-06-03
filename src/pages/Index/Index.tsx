import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Products from '../../components/Products'
import Process from '../../components/Process'
import Order from '../../components/Order'
import './Index.scss'

function Index() {
  return (
    <Layout>
      <MainBanner />
      <Products />
      <Process />
      <Order />
    </Layout>
  )
}

export default Index
