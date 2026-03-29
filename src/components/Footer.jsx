import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-symbol">&lt;</span>
              RP
              <span className="footer__logo-symbol"> /&gt;</span>
            </a>
            <p className="footer__tagline">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="footer__right">
            <p className="footer__copyright">
              © {currentYear} Rajnish Pandey. All rights reserved.
            </p>
            <p className="footer__built">
              Built with <span className="footer__heart">♥</span> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
