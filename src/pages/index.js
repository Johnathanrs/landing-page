import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import video_poster from "../videos/video-poster.jpg"
import video_mp4 from "../videos/background-video.mp4"
import video_webm from "../videos/background-video.webm"
import slide_2 from "../images/slider-4-slide-2.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="banner">
      <div className="slideshow white-bg">
        <div className="slider-banner-container">
          <div className="slider-banner-fullscreen-alt-nav">
            <ul>
              <li data-transition="fade" data-slotamount="1"  data-masterspeed="1000" data-fstransition="fade" data-fsmasterspeed="1000" data-saveperformance="off" data-title="Slide 1">
                <img src={video_poster}  alt="slidebg1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />
                <div className="tp-caption dark-translucent-bg"
                  data-x="center"
                  data-y="bottom"
                  data-speed="800"
                  data-start="0" />
                <div className="tp-caption tp-fade fadeout fullscreenvideo"
                  data-x="0"
                  data-y="0"
                  data-speed="1000"
                  data-start="1100"
                  data-easing="Power4.easeOut"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-endspeed="1500"
                  data-endeasing="Power4.easeIn"
                  data-autoplay="true"
                  data-autoplayonlyfirsttime="false"
                  data-nextslideatend="true"
                  data-volume="mute" 
                  data-forceCover="1" 
                  data-aspectratio="16:9" 
                  data-forcerewind="on" 
                  style={{zIndex: 2}}>
                  <video className="" loop autoPlay width="100%"> 
                    <source src={video_mp4} type='video/mp4'/>
                    <source src={video_webm} type='video/webm'/>
                  </video>
                </div>

                <div className="tp-caption very_large_text sfl tp-resizeme"
                  data-x="center"
                  data-y="70" 
                  data-speed="200"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="200"
                  data-splitin="chars"
                  data-elementdelay="0.07"
                  data-endelementdelay="0.1"
                  data-splitout="chars">We Love to Code
                </div>

                <div className="tp-caption sfr small_thin_white text-center tp-resizeme"
                  data-x="center"
                  data-y="170" 
                  data-speed="600"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>

                <div className="tp-caption sft"
                  data-x="center"
                  data-y="500" 
                  data-speed="600"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="600">
                  <a href="#page-top" className="btn btn-lg smooth-scroll"><i className="fa fa-angle-double-down fa-2x"></i></a>
                </div>

              </li>
              <li data-transition="fade" data-slotamount="7" data-masterspeed="1000" data-saveperformance="on" data-title="Slide 2">
              
                <img src={slide_2}  alt="slidebg1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />

                <div className="tp-caption light-translucent-bg"
                  data-x="center"
                  data-y="bottom"
                  data-speed="800"
                  data-start="0"
                  style={{backgroundColor: '#fff03'}}>
                </div>

                <div className="tp-caption very_large_text sfl tp-resizeme black"
                  data-x="center"
                  data-y="70" 
                  data-speed="200"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="200"
                  data-splitin="chars"
                  data-elementdelay="0.07"
                  data-endelementdelay="0.1"
                  data-splitout="chars">Boost Your Online Presence
                </div>

                <div className="tp-caption sfr small_thin_dark text-center tp-resizeme"
                  data-x="center"
                  data-y="170" 
                  data-speed="600"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="600">
                    Quia dolorum consectetur doloremque a aliquam ullam labore, ducimus adipisci iste animi
                </div>

                <div className="tp-caption light_medium_20 sft"
                  data-x="center"
                  data-y="500" 
                  data-speed="600"
                  data-start="0"
                  data-end="10000"
                  data-endspeed="600">
                  <a href="#page-top" className="btn btn-lg black smooth-scroll"><i className="fa fa-angle-double-down fa-2x"></i></a>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
