import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import ClientNew from '../assets/images/client1.jpg';

export default function ClientCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>What Says Our Customers</h2>
        </div>

        <Slider {...settings}>
          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <h6>Moana Michell</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={ClientNew} alt="Client 1" className="box-img" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
                </p>
                <h6>John Doe</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={ClientNew} alt="Client 2" className="box-img" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <h6>Jane Doe</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={ClientNew} alt="Client 3" className="box-img" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
