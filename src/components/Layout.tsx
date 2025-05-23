import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'mobile',
    });
  }, []);

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