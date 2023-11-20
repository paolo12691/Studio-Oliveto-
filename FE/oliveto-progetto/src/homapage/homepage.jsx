import React from 'react';
import Carouselpage from '../carosello/carouselpage'; // Il tuo componente carousel
import Main from '../main/main'; // La tua sezione principale

function HomePage() {
  return (
    <div>
      <Carouselpage />
      <Main />
    </div>
  );
}

export default HomePage;
