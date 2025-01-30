import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

const data = [
    {text:"RENEW YOUR LOOK",
     heading:"A TRADITION OF QUALITY CLEANING"
    },
    {text:"NEW LOOK",
    heading:"A TRADITION OF QUALITY CLEANING"
    },
    {text:"RENEW YOUR LOOK",
    heading:"A TRADITION OF QUALITY CLEANING"
    }
]
function Carousel(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return(
        <Slider {...settings}>
        {data.map(eachitem =>(
            <div className="carouselcontent">
            <p className="carouselcontentparagrapgh">{eachitem.text}</p>
            <h1 className="carouselcontentheading">{eachitem.heading}</h1>
            <button className="carouselcontentbutton mr-auot">Contact us</button>
        </div>
        ))}
        </Slider>
    )
}

export default Carousel