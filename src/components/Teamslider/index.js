import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

function Teamslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="teamcart">
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555449/excited-black-guy-ready-for-cleaning-apartment_gvkf07.jpg" className="teammembers" alt="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Monica Gardon</h1>
              <p className="position">House Cleaning</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555311/young-woman-cleaning-windows-using-spray-and-rag_vkijqk.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Laura Jones</h1>
              <p className="position">Cleaner</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555229/images_vek5uu.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Sara Ryan</h1>
              <p className="position">House Cleaner</p>
            </div>
          </div>
          <div className="teamcart">
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555449/excited-black-guy-ready-for-cleaning-apartment_gvkf07.jpg" className="teammembers" alt="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Monica Gardon</h1>
              <p className="position">House Cleaning</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555311/young-woman-cleaning-windows-using-spray-and-rag_vkijqk.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Laura Jones</h1>
              <p className="position">Cleaner</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555229/images_vek5uu.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Sara Ryan</h1>
              <p className="position">House Cleaner</p>
            </div>
          </div>
          <div className="teamcart">
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555449/excited-black-guy-ready-for-cleaning-apartment_gvkf07.jpg" className="teammembers" alt="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Monica Gardon</h1>
              <p className="position">House Cleaning</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555311/young-woman-cleaning-windows-using-spray-and-rag_vkijqk.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Laura Jones</h1>
              <p className="position">Cleaner</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/da4hbebqt/image/upload/v1737555229/images_vek5uu.jpg" className="teammembers"/>
            <div className="teamdetailscontainer">
              <h1 className="name">Sara Ryan</h1>
              <p className="position">House Cleaner</p>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Teamslider;