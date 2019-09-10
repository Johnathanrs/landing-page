import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../bootstrap/css/bootstrap.css"
import "../fonts/font-awesome/css/all.min.css"
import "../fonts/font-awesome/css/font-awesome.css"
import "../fonts/fontello/css/fontello.css"
import "../plugins/rs-plugin/css/settings.css"
import "../plugins/rs-plugin/css/extralayers.css"
import  "../plugins/magnific-popup/magnific-popup.css"
import "../css/animations.css"
import "../plugins/owl-carousel/owl.carousel.css"
import  "../css/style.css"
import "../css/skins/red.css"
import "../css/custom.css"

import LOGO from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header
    className="header fixed clearfix dark fixed header-small"
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="container">
      <div className="row">
          <div className="col-md-3">
              <div className="header-left clearfix">
                  <div className="logo">
                      <a href="/"><img id="logo" src={LOGO} alt="Eterant" /></a>
                  </div>
                  <div className="site-slogan">
                      Clean &amp; Powerful Bootstrap Theme
                  </div>

              </div>
          </div>
          <div className="col-md-9">
              <div className="header-right clearfix">
                  <div className="main-navigation animated">
                      <nav className="navbar navbar-default" role="navigation">
                          <div className="container-fluid">
                              <div className="navbar-header">
                                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                  </button>
                              </div>
                              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                  <ul className="nav navbar-nav navbar-right">
                                      <li><a href="/">Home</a></li>
                                      <li><a href="/portfolio">Portfolio</a></li>
                                      <li><a href="/contact">Contact</a></li>
                                  </ul>
                              </div>

                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
