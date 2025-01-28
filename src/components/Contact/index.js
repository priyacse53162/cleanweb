import './index.css'

const Contact = () => {
  return (
    <div className="contactContainer" id="CONTACT">
      <div className="contactcart">
        <img
          className="contactlogo"
          src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737533653/logo-wide_jswjy1.png"
          alt="logoimage"
        />
        <p className="contecttext margintop">
          Washla customers has a tremendous opportunity to answer the call of
          logistic.
        </p>
      </div>
      <div className="contactcart">
        <h1 className="contactcartheading">Get In Touch</h1>
        <p className="contecttext margintop">
          8273 NW 56th ST Miami, Florida 33195 United States
        </p>
        <p className="contecttext margintop">info@amiso.com</p>
        <p className="contecttext">052 5401 3322</p>
      </div>
      <div className="contactcart">
        <h1 className="contactcartheading textcenter">Quick Links</h1>
        <div className="quicklink margintop">
          <div className="quicklinkcontainer">
            <p className="contecttext">Home</p>
            <p className="contecttext">About</p>
            <p className="contecttext">Services</p>
            <p className="contecttext">Team</p>
          </div>
          <div className="quicklinkcontainer">
            <p className="contecttext">FAQ</p>
            <p className="contecttext">Contact Us</p>
            <p className="contecttext">Gallery</p>
            <p className="contecttext">Blogs</p>
          </div>
        </div>
      </div>
      <div className="contactcart">
        <h1 className="contactcartheading">Our Newsletter</h1>
        <p className="contecttext margintop">
          Subscribe to our newsletter to receive the latest news about our
          services.
        </p>
        <div className="inputContainer">
          <input
            type="text"
            className="signupinput"
            placeholder="Your email address"
          />
          <button className="signupbutton">SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default Contact