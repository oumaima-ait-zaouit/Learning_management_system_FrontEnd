import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {

      var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },

          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (

    <div className="container mt-4 py-5" >
          
        <h3 className="pb-1 mb-4 mt-8">Categories <a className="float-end"></a></h3>
          <div className="row">

          <Slider {...settings}> 

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>Programming</button>   
                    </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>Designe</button>   
                    </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>Photography</button>   
                    </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>Marketing</button>   
                    </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>SEO</button>   
                    </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="card text-center" style={{ margin: "10px" }}>
                    <a href="#"><img src="LMS_categories_2.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                      <button href="#" className="btn w-100" style={{backgroundColor:'#b3c4fc'}}>HR</button>   
                    </div>
                  </div>
              </div>

          </Slider>   
         </div> 
        </div>  
         
  );
}

export default Category;
