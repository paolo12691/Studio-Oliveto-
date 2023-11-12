import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../imagine/imagi1.webp';
import image2 from '../imagine/imag2.webp';
import image3 from '../imagine/imag3.webp';

function Carouselpage() {
  const [showArrows, setShowArrows] = useState(false);

  const captionStyle = {
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000',
  };

  const textStyle = {
    fontSize: '1.2em',
    fontStyle: 'italic',
  };

  return (
    <div
      onMouseOver={() => setShowArrows(true)}
      onMouseOut={() => setShowArrows(false)}
    >
      <Carousel data-bs-theme="dark" controls={showArrows}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ maxWidth: '900px', maxHeight: '500px', width: '100%', height: 'auto' }}
          />
          <Carousel.Caption style={captionStyle}>
            <h5 style={headingStyle}>Gemütliches Seeblick-Studio</h5>
            <p style={textStyle}>Genießen Sie den atemberaubenden Ausblick und entspannen Sie im Pool auf der Dachterrasse.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ maxWidth: '900px', maxHeight: '500px', width: '100%', height: 'auto' }}
          />
          <Carousel.Caption style={captionStyle}>
            <h5 style={headingStyle}>Dach Pool</h5>
            <p style={textStyle}>Das Studio bietet einen Gemeinschaftspool auf dem Dach, mit Aussicht auf den Lunganersee.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ maxWidth: '900px', maxHeight: '500px', width: '100%', height: 'auto' }}
          />
          <Carousel.Caption style={captionStyle}>
            <h5 style={headingStyle}>Ausstattung</h5>
            <p style={textStyle}>Moderne Einrichtung, voll ausgestattete Küche, gemütliches Doppelbett und vieles mehr.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselpage;
