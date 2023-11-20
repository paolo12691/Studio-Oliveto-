import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../imagine/foto1.jpg';
import image0 from '../imagine/foto8.jpg';
import image2 from '../imagine/foto2.jpg'
import image3 from '../imagine/foto3.jpg'
import image4 from '../imagine/foto4.jpg'
import image5 from '../imagine/foto5.jpg'
import image6 from '../imagine/foto6.jpg'
import image8 from '../imagine/foto8.jpg'
import image9 from '../imagine/foto9.jpg'
import image10 from '../imagine/foto10.jpg'
import image11 from '../imagine/foto11.jpg'
import image12 from '../imagine/foto12.jpg'
import image13 from '../imagine/foto13.jpg'
import { BiZoomIn } from 'react-icons/bi';
import { FaWifi, FaTv, FaBed, FaBinoculars, FaSwimmingPool, FaParking, FaCalendarWeek } from 'react-icons/fa';




function App() {
  return (
    <main>
          <section id="about" className="about">

          <div data-aos="fade-up" data-aos-delay="100" className='container'>
  <div className="row align-items-xl-center">

    <div className="col-xl-5 content">
      <h3 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
        About the Studio
      </h3>
      <h2 style={{ fontSize: "32px", textDecoration: "underline", textAlign: "center" }}>
        Über diese Unterkunft
      </h2>
      <p style={{textDecoration: "underline", fontWeight: "bold", color: "green"}}>
  Die Studio-Ferienwohnung bietet Platz für 2 Personen und bietet die Möglichkeit, auch einen zusätzlichen Gast oder ein Kind unterzubringen. Die Wohnung eignet sich auch für längere Aufenthalte. Das Studio ist mit allen notwendigen Annehmlichkeiten ausgestattet, darunter eine voll ausgestattete Küche, ein komfortables Doppelbett und ein Badezimmer mit Dusche. Die Einrichtung ist modern und gemütlich gestaltet, um dir einen angenehmen Aufenthalt zu ermöglichen. Im Sommer kannst du dich im Pool auf der Dachterrasse abkühlen. Die Wohnung befindet sich in der Nähe von Restaurants, Einkaufsmöglichkeiten, Wanderwegen, Sehenswürdigkeiten und bietet zugleich eine ruhige Umgebung für erholsame Ferien.
</p>
    </div>

    <div className="col-xl-7">
      <div className="row mt-4 mt-xl-0" data-aos="fade-up" data-aos-delay="200">

       <div className="mx-auto ms-xl-auto" style={{ width: "fit-content", borderRadius: "10px", overflow: "hidden", margin: "10px" }}>
         <img src={image0} alt="Description of the image" style={{ width: "100%", borderRadius: "10px" }} />
       </div>

      </div>
    </div>

  </div>
</div>




</section>
  <section id="services" className="services">
      <div className="container section-title" data-aos="fade-up" style={{ marginTop: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", textDecoration: "underline", color: "green" }}>
          Ausstattung
        </h2>
        <p>Moderne Einrichtung, voll ausgestattete Küche, gemütliches Doppelbett und vieles mehr</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaWifi /></div>
              <div>
                <h4 className="title"><a className="stretched-link">WLAN</a></h4>
                <p className="description">
                  WLAN steht jederzeit zur Verfügung, ein bequemer Bürostuhl für kurze Homeoffice-Einsätze kann auf Anfrage bereitgestellt werden.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaTv /></div>
              <div>
                <h4 className="title"><a className="stretched-link">TV</a></h4>
                <p className="description">
                  Ein Fernseher mit Smart-TV-Funktionen, um Ihre Lieblingsinhalte zu streamen und eine Vielzahl von Unterhaltungsmöglichkeiten zu genießen.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaBed /></div>
              <div>
                <h4 className="title"><a className="stretched-link">Zimmer</a></h4>
                <p className="description">
                  Die Unterkunft hat zwei Einzelbetten, ein Schlafsofa, eine vollausgestattete Küche, ein Essbereich und ein eigenes Badezimmer.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaBinoculars /></div>
              <div>
                <h4 className="title"><a className="stretched-link">Trips</a></h4>
                <p className="description">
                  Viele Ausflugsmöglichkeiten, darunter schöne Wanderwege, Seepromenade in Lugano, Castello di Morcotem, Stand Up Paddle in Agno und viele Bademöglichkeiten am Luganersee.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaSwimmingPool /></div>
              <div>
                <h4 className="title"><a className="stretched-link">Dach Pool</a></h4>
                <p className="description">
                  Das Studio bietet einen Gemeinschaftspool auf dem Dach mit Sonnenliegen und einem atemberaubenden Blick auf die Umgebung.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaParking /></div>
              <div>
                <h4 className="title"><a className="stretched-link">Parken</a></h4>
                <p className="description">Ein kostenloser Parkplatz steht direkt vor dem Haus zur Verfügung.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="700">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><FaCalendarWeek /></div>
              <div>
                <h4 className="title"><a className="stretched-link">Verfügbarkeit</a></h4>
                <p className="description">Prüfe die Verfügbarkeit und buche deine Ferien in dieser schönen Studio-Wohnung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section id="portfolio" className="portfolio">

<div className="container section-title" data-aos="fade-up" style={{ textAlign: "center" }}>
  <h2 style={{ fontWeight: "bold", color: "black" }}>Fotos</h2>
  <p style={{ fontWeight: "600", color: "green" }}>Studio und Ausstattung</p>
</div>

<div className="container">

<div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order" style={{ textAlign: 'center' }}>
  <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100" style={{ backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
    <li data-filter="*" className="filter-active" style={{ listStyle: 'none', display: 'inline-block', marginRight: '10px', cursor: 'pointer', padding: '8px', background: '#ddd', borderRadius: '3px' }}>Alle</li>
    <li data-filter=".filter-house" style={{ listStyle: 'none', display: 'inline-block', marginRight: '10px', cursor: 'pointer', padding: '8px', background: '#ddd', borderRadius: '3px' }}>Studio</li>
    <li data-filter=".filter-view" style={{ listStyle: 'none', display: 'inline-block', marginRight: '10px', cursor: 'pointer', padding: '8px', background: '#ddd', borderRadius: '3px' }}>Aussicht</li>
    <li data-filter=".filter-other" style={{ listStyle: 'none', display: 'inline-block', cursor: 'pointer', padding: '8px', background: '#ddd', borderRadius: '3px' }}>Sonstiges</li>
  </ul>
    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-view">
      <img src={image2}/>
        <div className="portfolio-info">
          <h4>Aussenansicht</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08694.jpg" title="View 1" data-gallery="portfolio-gallery-branding"
            className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-view">
        <img src={image1}/>
        <div className="portfolio-info">
          <h4>Balkon</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08322.jpg" title="View 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-house">
        <img src={image10}/>
        <div className="portfolio-info">
          <h4>Küche und Essbereich</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08520-Bearbeitet.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-house">
        <img src={image11}/>
        <div className="portfolio-info">
          <h4>Wohnzimmer</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08500-Bearbeitet.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-house">
        <img src={image9}/>
        <div className="portfolio-info">
          <h4>Aussziehbett</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08566-Bearbeitet.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-house">
        <img src={image12}/>
        <div className="portfolio-info">
          <h4>Badezimmer</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08380.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>

      </div>
     
      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-view">
          <img src={image13}/>
          <div className="portfolio-info">
            <h4>Blick vom Balkon</h4>
            <p> </p>
            <a href="assets/img/portfolio oliveto/DSC08348.jpg" title="View 3" data-gallery="portfolio-gallery-product"
              className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>

        </div>
      </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-view">
          <img src={image3}/>
          <div className="portfolio-info">
            <h4>Dach Pool</h4>
            <p> </p>
            <a href="assets/img/portfolio oliveto/DSC08686.jpg" title="View 4" data-gallery="portfolio-gallery-app"
              className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>

          </div>
        </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
        <img src={image5}/>
        <div className="portfolio-info">
          <h4>Nesspresso Maschine</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08621.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
        <img src={image8}/>
        <div className="portfolio-info">
          <h4>Leseecke</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08604.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding"
            className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
        <img src={image6}/>
        <div className="portfolio-info">
          <h4>Moderne Einrichtung</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08597.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding"
            className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
        <img src={image4}/>
        <div className="portfolio-info">
          <h4>Welcome Bereich</h4>
          <p> </p>
          <a href="assets/img/portfolio oliveto/DSC08644.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding"
            className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
        </div>
      </div>

    </div>

  </div>

</div>

</section>

<section id="pricing" className="pricing">


<div
  className="container section-title"
  data-aos="fade-up"
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px", 
  }}
>
  <h2 style={{ fontWeight: "bold" }}>Preis</h2>
  <hr style={{ width: "50%", margin: "10px 0", backgroundColor: "black" }} />
  <p style={{ color: "green" }}>
    Ein minimum von 3 Nächte erforderlich für eine Buchung.
  </p>
</div>

  <div className="container" data-aos="zoom-in" data-aos-delay="100">

  <div className="col-lg-6 col-12 mx-lg-auto">
  <div className="pricing-item featured" style={{ textAlign: "center", marginBottom: "50px" }}>
    <h3 style={{ fontWeight: "bold" }}>Preis pro Nacht</h3>
    <div className="icon">
      <i className="bi bi-box"></i>
    </div>

    <h4 style={{ marginTop: "10px", fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        <sup style={{ fontSize: "16px", marginRight: "4px" }}>CHF</sup>100
        <span style={{ fontSize: "16px", marginLeft: "4px" }}>/ Nacht (exkl. Reinigung)</span>
      </h4>

    <div style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '20px', marginTop: '50px' }}>
      <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
        <li><i className="bi bi-check" style={{ color: 'green' }}></i> <span>Bettbezug</span></li>
        <li><i className="bi bi-check" style={{ color: 'green' }}></i> <span>Tücher</span></li>
        <li><i className="bi bi-check" style={{ color: 'green' }}></i> <span>Badetücher</span></li>
        <li><i className="bi bi-check" style={{ color: 'green' }}></i> <span>Pool Nutzung</span></li>
        <li><i className="bi bi-x" style={{ color: 'red' }}></i> <span>End-reinigung kostet CHF 80.- Zusätzlich</span></li>
      </ul>
    </div>
    <div style={{ marginTop: "20px" }}>
      <a href="#contact" className="buy-btn" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", textDecoration: "none", fontWeight: "bold", borderRadius: "5px" }}>Buchen</a>
    </div>
  </div>
</div>
  </div>

</section>


<section id="faq" className="faq">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="content px-xl-5">
              <h3 style={{ fontWeight: 'bold' }}>
                <span>Frequently Asked </span><strong>Questions</strong>
              </h3>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container">
              <div className="faq-item rounded-3 faq-active">
                <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'green' }}>
                  <span className="num">1.</span> <span>Sind Haustiere erlaubt?</span>
                </h3>
                <div className="faq-content">
                  <p style={{ textDecoration: 'underline', color: 'green' }}>
                    Haustiere sind in unserem Studio nicht erlaubt. Wir bitten um dein Verständnis für diese Regelung.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item rounded-3">
                <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'green' }}>
                  <span className="num">2.</span> <span>Wie läuft der Check-in ab?</span>
                </h3>
                <div className="faq-content">
                  <p style={{ textDecoration: 'underline', color: 'green' }}>
                    Der Check-in erfolgt selbständig, sie erhalten alle Angaben nach der Buchung.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item rounded-3">
                <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'green' }}>
                  <span className="num">3.</span> <span>Ist der Pool für die Allgemein Nutzung?</span>
                </h3>
                <div className="faq-content">
                  <p style={{ textDecoration: 'underline', color: 'green' }}>
                    Ja, es steht ein Pool zur Gemeinschaftsnutzung zur Verfügung.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item rounded-3">
                <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'green' }}>
                  <span className="num">4.</span> <span>Wie viele Personen können in der Ferienwohnung übernachten??</span>
                </h3>
                <div className="faq-content">
                  <p style={{ textDecoration: 'underline', color: 'green' }}>
                    Die Ferienwohnung bietet Platz für bis zu 2 Personen, ein kleines Sofabett steht zusätzlich zur Verfügung.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item rounded-3">
                <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'green' }}>
                  <span className="num">5.</span> <span>Sind Handtücher und Bettwäsche inklusive?</span>
                </h3>
                <div className="faq-content">
                  <p style={{ textDecoration: 'underline', color: 'green' }}>
                    Ja, Handtücher und Bettwäsche werden kostenfrei bereitgestellt.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="contact">
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontWeight: 'bold' }}>Kontakt</h2>
        <p style={{ textDecoration: 'underline', color: 'green' }}>
          Haben sie noch Fragen oder wollen sie buchen. Dann kontaktieren sie uns.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item rounded-3" data-aos="fade" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3 style={{ fontWeight: 'bold' }}>Address</h3>
                  <p>Via Monte Oliveto</p>
                  <p>6988 Ponte Tresa</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item rounded-3" data-aos="fade" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3 style={{ fontWeight: 'bold' }}>Telefon</h3>
                  <p>+41 79 28 30 815</p>
                  <p> </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item rounded-3" data-aos="fade" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3 style={{ fontWeight: 'bold' }}>Email</h3>
                  <p>info@studio-oliveto.ch</p>
                  <p> </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item rounded-3" data-aos="fade" data-aos-delay="500">
                  <i className="bi bi-clock"></i>
                  <h3 style={{ fontWeight: 'bold' }}>Auskunftszeit</h3>
                  <p>Montag - Freitag</p>
                  <p>9:00AM - 06:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form rounded-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-3"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control rounded-3"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button
                    type="submit"
                    className="rounded-3"
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      borderRadius: '5px',
                    }}
                  >
                    Send Message
                  </button>
                  <Link to="/prenotazione">
    <button
      type="button"
      className="rounded-3"
      style={{
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        borderRadius: '5px',
        marginRight: '10px',
      }}
    >
     Booking
    </button>
  </Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default App;
