import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="ftco-footer bg-bottom ftco-no-pt"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
    >
      <div className="container">
        <div className="row mb-5">
          {/* About */}
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Abok Adventures is a premier travel agency specializing in
                unforgettable African safaris across Kenya and Tanzania. We
                craft authentic experiences that connect travelers with the
                breathtaking landscapes, diverse wildlife, and rich cultures
                of East Africa.
              </p>

              <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                <li className="ftco-animate">
                  <a
                    href="https://www.tiktok.com/@abokadventuresandsafaris"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-brands fa-tiktok"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579892807201"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="https://www.instagram.com/abokadventuresandsafaris/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Information */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><Link href="/contact" className="py-2 d-block">Online Enquiry</Link></li>
                <li><Link href="/terms-and-conditions" className="py-2 d-block">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="py-2 d-block">Privacy</Link></li>
                <li><Link href="/refund" className="py-2 d-block">Refund Policy</Link></li>
                <li><Link href="/cookie-policy" className="py-2 d-block">Cookie Policy</Link></li>
                <li><Link href="/contact" className="py-2 d-block">Call Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li><Link href="/destination" className="py-2 d-block">Adventure</Link></li>
                <li><Link href="/hotel" className="py-2 d-block">Hotel and Restaurant</Link></li>
                <li><Link href="/destination" className="py-2 d-block">Beach</Link></li>
                <li><Link href="/destination" className="py-2 d-block">Nature</Link></li>
                <li><Link href="/hotel" className="py-2 d-block">Camping</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker"></span>
                    <span className="text">CBD Nairobi, Kenya</span>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/254759335885"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+2547 59335885</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="icon fa fa-paper-plane"></span>
                      <span className="text">info@abokadventures.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              © {new Date().getFullYear()} All rights reserved Abok Adventures &
              Safaris <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
