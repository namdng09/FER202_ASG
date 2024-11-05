import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <div className='container'>
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ebayimg.com/images/g/JeAAAOSw4sRnDTsr/s-l1600.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.a2xaccounting.com/img/content/ebay.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://channelgrabber.com/wp-content/uploads/2020/05/Stand-out-on-eBay-no-custom-shopfront-banner-2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
