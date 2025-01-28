import './index.css'
import {FaHandsWash} from 'react-icons/fa'
import {BiSolidBrushAlt} from 'react-icons/bi'
import {GiHouse} from 'react-icons/gi'
const About = () => {
  return (
    <div className="aboutcontent">
      <div className="abouttopcontainer">
        <div className="aboutcart">
          <FaHandsWash />
          <h1 className="aboutheading">Professional Cleaning</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
        <div className="aboutcart">
          <BiSolidBrushAlt />
          <h1 className="aboutheading">Fast and efficient</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
        <div className="aboutcart">
          <GiHouse />
          <h1 className="aboutheading">Renew your look</h1>
          <p className="aboutparagraph">
            Housekeeping is responsible for minor security in hotel Ecosystem
            for Food and Cleaner through.
          </p>
        </div>
      </div>
      <div className="aboutbottomcontainer">
        <div className="bottomaboutcart">
          <h1 className="aboutcontentheading">
            A Clean House is a Happy Place!
          </h1>
          <p className="aboutcontentparagraph">
            Washla has met the demands of a growing world.
          </p>
        </div>
        <div className="bottomaboutcart">
          <p className="aboutcontentparagraph firstletterstyle">
            Washla customers has a tremendous opportunity to answer the call of
            logistic needs across the globe. Has 26 affiliated state soybean
            associations representing 30 soybean-producing state.
          </p>
        </div>
        <div className="bottomaboutcart">
          <p className="aboutcontentparagraph linespace">
            Washla customers has a tremendous opportunity to answer the call of
            logistic needs across the globe. Has 26 affiliated state soybean
            associations representing 30 soybean-producing state.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About