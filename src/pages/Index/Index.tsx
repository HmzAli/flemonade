import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Flavours from '../../components/Flavours'
import Order from '../../components/Order'
import './Index.scss'

function Index() {
  return (
    <Layout>
      <MainBanner />
      <Flavours />
      <Order />
    </Layout>
  )
}

export default Index
