/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"


import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="front no-trans">{children}</main>
        
      </div>
      <footer id="footer"  class="light">
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Copyright © 2015 <a target="_blank" href="http://htmlcoder.me">ETERANT, LLC</a>. All Rights Reserved</p>
              </div>
              <div className="col-md-6">
                <nav className="navbar navbar-default" role="navigation">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>   
                  <div className="collapse navbar-collapse" id="navbar-collapse-2">
                    <ul className="nav navbar-nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="/portfolio">Portfolio</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
