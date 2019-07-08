import React from 'react';
import Image from './Image';

const Hero = () => (
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image alt="First slide" className="d-block w-100" imageUrl="https://i5.walmartimages.com/dfw/4ff9c6c9-cc0f/k2-_2add2578-1f56-46f5-b4cf-23918338b919.v1.jpg-b3adfa4bd51eea13f8a387c533d57254b7bcd7fc.jpg" sizes={[600]} />
      </div>
      <div className="carousel-item">
        <Image alt="Second slide" className="d-block w-100" imageUrl="https://i5.walmartimages.com/dfw/4ff9c6c9-f5c9/k2-_181600aa-2d16-48bc-9c9a-47aa76a097de.v1.jpg" sizes={[600]} />
      </div>
      <div className="carousel-item">
        <Image alt="Third slide" className="d-block w-100" imageUrl="https://i5.walmartimages.com/dfw/4ff9c6c9-f5c9/k2-_181600aa-2d16-48bc-9c9a-47aa76a097de.v1.jpg" sizes={[600]} />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Hero;
