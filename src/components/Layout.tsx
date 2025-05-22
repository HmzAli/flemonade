import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout 