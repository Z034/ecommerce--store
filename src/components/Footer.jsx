import { Mail } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="footer-wrap">
      <footer className="footer">
        <div className="footer-top">
          <div>
            <h3 className="footer-logo">
              <Logo />
            </h3>
            <p className="footer-text">
              Original art for the spaces we live in, and the worlds we carry
              within.
            </p>
            <div className="socials">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-label="Instagram"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              <Mail size={20} strokeWidth={1.6} />
            </div>
          </div>

          <div className="contact">
            <span className="contact-title">Contact us</span>
            <p>starry@gallery.dz</p>
            <p>+213 777777777</p>
            <p>Art advice, made personal.</p>
            <p>Sun–Thur, 9am–6pm</p>
          </div>
        </div>
        <p className="copyright">© 2026 Starry Gallery.</p>
      </footer>
    </div>
  );
}

export default Footer;