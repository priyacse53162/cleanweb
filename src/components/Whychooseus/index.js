import './index.css'
import {GiTeamIdea} from 'react-icons/gi'
import {Ri24HoursFill} from 'react-icons/ri'
import {SiTicktick} from 'react-icons/si'
import {FaBucket} from 'react-icons/fa6'
import {FaHandsWash} from 'react-icons/fa'
import { PiSprayBottleBold } from "react-icons/pi"
import { MdOutlineCleaningServices } from "react-icons/md"
const Whychooseus = () => {
  return (
    <>
      <div className="Whychooseuscart" id="PAGES">
        <p className="wcuparagraph">WHY CHOOSE US</p>
        <h1 className="wcuheading">Tradition of Trust</h1>
        <p className="wcuparagraph wcutext">
          we specialise in intelligent & efficient Search and belives in the
          power of partnership to grow business.
        </p>
      </div>
      <div className="abouttopcontainer">
        <div className="aboutcart wcucart">
          <button className="iconbutton">
            <GiTeamIdea />
          </button>
          <h1 className="aboutheading">Professional Team</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
        <div className="aboutcart wcucart">
          <button className="iconbutton">
            <Ri24HoursFill />
          </button>
          <h1 className="aboutheading">24/7 Services</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
        <div className="aboutcart wcucart">
          <button className="iconbutton">
            <SiTicktick />
          </button>
          <h1 className="aboutheading">Service Guarantee</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
      </div>
      <div className="wcubottomcontainer" id="GALLERY">
        <img
          className="wcuimage"
          src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737548755/young-beautiful-girl-apron-holding-bucket-with-cleaning-tools-pointing-with-index-finger-it-smiling-confident_141793-28487_adksdq.jpg"
          alt="cleaning imgae"
        />
        <div className="MaidContainer">
          <p className="wcuparagraph">MAID FOR YOU</p>
          <h1 className="wcuheading maidheading">
            A Cleaner Place is a Safer Place
          </h1>
          <p className="wcuparagraph wcutext maidparagraph">
            Washla customers has a tremendous opportunity to answer the call of
            logistic needs across the globe.
          </p>
          <div className="MaidcartContainer">
            <div className="aboutcart wcucart Maidcart">
              <FaHandsWash />
              <h1 className="aboutheading">Professional Cleaning</h1>
              <p className="aboutparagraph">
                Housekeeping is responsible for minor security.
              </p>
            </div>
            <div className="aboutcart wcucart Maidcart">
              <FaBucket />
              <h1 className="aboutheading">Fast and efficient</h1>
              <p className="aboutparagraph">
                Housekeeping is responsible for minor security.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ServiceContainer" id="BLOG">
        <p className="Serviceparagraph">WHY CHOOSE US</p>
        <h1 className="Serviceheading">Our Great Service</h1>
        <p className="Servicetext">
          we specialise in intelligent & efficient Search and belives in the
          power of partnership to grow business.
        </p>
        <div className="ServicecartContainer">
          <div className="Servicecart">
            <FaHandsWash />
            <h1 className="Servicecartheading">Home Cleaning</h1>
            <p className="Servicecartparagraph">
              Home and thoroughly launder them between usage, we give our teams
              the accusantium doloremque laudantium.
            </p>
          </div>
          <div className="Servicecart">
            <MdOutlineCleaningServices />
            <h1 className="Servicecartheading">Windows Cleaning</h1>
            <p className="Servicecartparagraph">
              Home and thoroughly launder them between usage, we give our teams
              the accusantium doloremque laudantium.
            </p>
          </div>
          <div className="Servicecart">
            <PiSprayBottleBold />
            <h1 className="Servicecartheading">Office Cleaning</h1>
            <p className="Servicecartparagraph">
              Home and thoroughly launder them between usage, we give our teams
              the accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whychooseus