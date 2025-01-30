import React,{Component} from 'react'
import './index.css'
import About from '.././About'
import Whychooseus from '.././Whychooseus'
import MeetTeam from '.././MeetTeam'
import Contact from '.././Contact'
import Carousel from ".././Carousel"
import Teamslider from ".././Teamslider"

import {FaPhoneAlt, FaTwitter} from 'react-icons/fa'

import { IoMail } from 'react-icons/io5';
import { TiSocialFacebook } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa6'
import { TiSocialLinkedin } from 'react-icons/ti'
import { FaCalculator } from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io"

class Home extends Component {
  render() {
    return (
      <div className="bgcontainer">
        <div className="topcontainer">
          <div className="navcontainer">
            <div className="contactnav">
              <div className="iconcontainer">
                <FaPhoneAlt />
                <p className="navtext">+123-456-7890</p>
              </div>
              <div className="iconcontainer">
                <IoMail />
                <p className="navtext">info@yourdomain.com</p>
              </div>
            </div>
            <div className="socialnav">
              <div className="socialiconscontainer">
                <TiSocialFacebook />
                <FaTwitter />
                <FaInstagram />
                <TiSocialLinkedin />
              </div>
              <button className="quotebutton">
                <FaCalculator />
                <p className="quotetext">GET A QUOTE</p>
              </button>
            </div>
          </div>
          <div className="logonav">
            <img
              className="logoimage"
              src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737533653/logo-wide_jswjy1.png"
              alt="logoimage"
            />
            <div id="Home" className="navlinkcontainer">
              <a className="navlink" href="#Home">
                HOME
              </a>
              <a className="navlink" href="#About">
                ABOUT
              </a>
              <a className="navlink" href="#PAGES">
                PAGES
              </a>
              <a className="navlink" href="#GALLERY">
                GALLERY
              </a>
              <a className="navlink" href="#BLOG">
                BLOG
              </a>
              <a className="navlink" href="#CONTACT">
                CONTACT
              </a>
            </div>
          </div>
          <div className="corouselcontainer">
            <Carousel />
          </div>
          <div className="aboutcontainer" id="About">
            <About />
          </div>
        </div>
        <div className="whychoosuscontainer">
          <Whychooseus />
          <div className="teamcontainer">
            <div className="Whychooseuscart">
              <p className="wcuparagraph">MEET OUR</p>
              <h1 className="wcuheading">Our Team</h1>
              <p className="wcuparagraph wcutext">
                The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.
              </p>
            </div>
          </div>
          <div className="corouselcontainer">
            <Teamslider />
          </div>
          <MeetTeam />
          <Contact />
          <hr className="horizantalline" />
          <div className="copyrights">
            <p className="contecttext">@2023 amiso all rights reserved.</p>
            <div className="contactsocialmedias">
              <TiSocialFacebook />
              <FaTwitter />
              <FaInstagram />
              <TiSocialLinkedin />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home