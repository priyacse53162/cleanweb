import "./index.css"
import { PiPlayFill } from "react-icons/pi"
import { BiHappyBeaming } from "react-icons/bi"
import { LuHouse } from "react-icons/lu"
import { TbHexagonNumber1 } from "react-icons/tb"
import { MdCleaningServices } from "react-icons/md";
const MeetTeam = () => {
    return (
      <>
        <div className="teamcontainer">
          <div className="Whychooseuscart">
            <p className="wcuparagraph">MEET OUR</p>
            <h1 className="wcuheading">Our Team</h1>
            <p className="wcuparagraph wcutext">
              The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.
            </p>
          </div>
        </div>
        <div className="cleaningcontainer">
          <div className="cleaningcart">
            <p className="iconborder2"><p className="iconborder"><button className="playbutton"><PiPlayFill /></button></p></p>
            <p className="cleaningcartparagraph">Cleaning your Worries Away</p>
            <h1 className="cleaningcartheading">Need Help With Cleaning?</h1>
            <button className="cleaningcartbutton">Request Call Back</button>
          </div>
        </div>
        <div className="happycustomer">
            <div className="happycustomercart">
              <BiHappyBeaming />
              <div className="happycustomerContent">
                <h1 className="happyContentheading">385</h1>
                <p className="happyContentParagraph">Happy Customers</p>
              </div>
            </div>
            <div className="happycustomercart">
              <LuHouse />
              <div className="happycustomerContent">
                <h1 className="happyContentheading">385</h1>
                <p className="happyContentParagraph">Happy Customers</p>
              </div>
            </div>
            <div className="happycustomercart">
              <TbHexagonNumber1 />
              <div className="happycustomerContent">
                <h1 className="happyContentheading">385</h1>
                <p className="happyContentParagraph">Happy Customers</p>
              </div>
            </div>
            <div className="happycustomercart bordernone">
              <MdCleaningServices />
              <div className="happycustomerContent">
                <h1 className="happyContentheading">385</h1>
                <p className="happyContentParagraph">Happy Customers</p>
              </div>
            </div>
        </div>
        <div className="teamcontainer">
          <div className="Whychooseuscart">
            <p className="wcuparagraph">WHY CHOOSE US</p>
            <h1 className="wcuheading">Recent News</h1>
            <p className="wcuparagraph wcutext">
              we specialise in intelligent & efficient Search and belives in the
              power of partnership to grow business.
            </p>
          </div>
        </div>
        <div className="recordsimagecontainer">
          <div className="recordscart cart1">
            <div className="date">
              <h1 className="dateheading">12</h1>
              <p className="dateparagraph">Nov</p>
            </div>
          </div>
          <div className="recordscart cart2">
            <div className="date">
              <h1 className="dateheading">11</h1>
              <p className="dateparagraph">Nov</p>
            </div>
          </div>
          <div className="recordscart cart3">
            <div className="date">
              <h1 className="dateheading">10</h1>
              <p className="dateparagraph">Nov</p>
            </div>
          </div>
        </div>
        <div className="recordscontentcontainer">
          <div className="recordscontentcart">
            <p className="recordscontentparagraph">CLEANING</p>
            <h1 className="recordscontentheading">Temporary Ruling Issued</h1>
            <p className="recordscontentparagraph">Washla has met the demands of a growing world cleaning tremendous.</p>
            <div className="clientprofilecontainer">
              <button className="profilepic profilepic1">
              </button>
              <div className="profiledetails">
                <p className="name">Martha Smith</p>
                <p className="position">Washla CEO</p>
              </div>
            </div>
          </div>
          <div className="recordscontentcart">
            <p className="recordscontentparagraph">CLEANING</p>
            <h1 className="recordscontentheading">Temporary Ruling Issued</h1>
            <p className="recordscontentparagraph">Washla has met the demands of a growing world cleaning tremendous.</p>
            <div className="clientprofilecontainer">
              <button className="profilepic profilepic2">
              </button>
              <div className="profiledetails">
                <p className="name">Martha Smith</p>
                <p className="position">Washla CEO</p>
              </div>
            </div>
          </div>
          <div className="recordscontentcart">
            <p className="recordscontentparagraph">CLEANING</p>
            <h1 className="recordscontentheading">Temporary Ruling Issued</h1>
            <p className="recordscontentparagraph">Washla has met the demands of a growing world cleaning tremendous.</p>
            <div className="clientprofilecontainer">
              <button className="profilepic profilepic3">
              </button>
              <div className="profiledetails">
                <p className="name">Martha Smith</p>
                <p className="position">Washla CEO</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default MeetTeam