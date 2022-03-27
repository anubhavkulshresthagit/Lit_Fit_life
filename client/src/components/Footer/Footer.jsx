import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer-start">
      <div>
      <footer data-component="footer ">
      <div className="container-fluid feature py-5" align="left">
        <div className="row">
          <div className="col-sm-3 footer-logo-box">
            <h1>LIT_FIT_LIFE</h1>
          </div>
          <div className="col-sm-3">
            <ul>
                  <li><h4>About Us</h4></li>
                  <li><a href='!#'>GET TO KNOW US</a></li>
                  <li><a href='!#'>Privay policy</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>Links</h4></li>
              <li><a href="!#">Home</a></li>
              <li><a href="!#">Upload</a></li>
              <li><a href='!#'>FitWall</a></li>
              <li><a href='!#'>Challenge your friend</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>What Stops people?</h4></li>
              <li>Factors like</li>
              <li className="footer-icon-box"><i className="fa fa-envelope fa-1x footer-icon fa-inverse" aria-hidden="true"></i>lack of time</li>
              <li className="footer-icon-box"><i className="fa fa-phone fa-1x footer-icon fa-inverse" aria-hidden="true"></i>social influence</li>
              <li className="footer-icon-box"><i className="fa fa-map-marker fa-1x footer-icon fa-inverse" aria-hidden="true"></i>lack of energy</li>
              <li className="footer-icon-box"><i className="fa fa-map-marker fa-1x footer-icon fa-inverse" aria-hidden="true"></i>lack of willpower</li>
              <li className="footer-icon-box2 text-center">Fitness made easy with 7Fit</li>
            </ul>
          </div>
        </div>

        <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-connect">
              CONNECT <span className="footer-social-small">with</span> US
              </span>
              <span className="footer-social-overlap footer-social-icons-wrapper">
              <a href="!#" target="_new" title="Facebook"><i className="fa fa-facebook"></i></a>
              <a href="https://instagram.com/charis_2u?utm_medium=copy_link" target="_new" title="Instagram"><i className="fa fa-instagram"></i></a>
              </span>
        </section>

<div className="row footer-copyright">

  <div className="col-sm-6 footer-copyright-text">
      <i className="fa fa-copyright" aria-hidden="true"></i> <span className="small">  </span> <a href="!#" rel="nofollow">Terms</a><span className="small"> | </span><a href="/privacy-policy.html"  rel="nofollow">Privacy</a>
  </div>

  <div className="col-sm-6 footer-copyright-text2">
      <i className="fa fa-pencil fa-1x fa-inverse" aria-hidden="true"></i> Powered by: <a href="https://www.tensketch.com/" target="_new">LIT_FIT_LIFE</a>.
  </div>

</div>

</div>
      </footer>
      </div>
    </div>
  );
}

export default Footer;
