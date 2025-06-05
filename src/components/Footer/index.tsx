import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" data-aos="fade-in" data-aos-duration="500">
        <div className="connect">
          <h4> Connect with us </h4>
          <ul className="social-links">
            <li>
              <a target="_blank" href="https://www.instagram.com/flemonade.my/">
                <img src="./instagram.png" alt="instagram" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://wa.me/+601111474404">
                <img src="./whatsapp.png" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">©Flemonade 2025. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 