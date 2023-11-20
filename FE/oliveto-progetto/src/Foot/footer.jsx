import React from 'react';
import { MDBFooter, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faAirbnb } from '@fortawesome/free-brands-svg-icons';
import image13 from '../imagine/Logo-01.jpg';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='#' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        
          <a href='https://www.instagram.com/studio_oliveto/' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
         
          <a href='https://www.airbnb.it/rooms/683369160659067221?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-18&check_out=2024-02-23&source_impression_id=p3_1700428333_eYy6ROlcDLpvOLXD&previous_page_section_name=1000&federated_search_id=d43b2982-0822-4b5c-b8e2-ab67567c72a0' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faAirbnb} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={image13} alt='Studio Oliveto Logo' className='me-3 footer-logo' style={{ width: '100px' }} />
                Studio Oliveto
              </h6>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ausstattung
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Impressum
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@studio-oliveto.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright Studio Oliveto All Rights Reserved
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          IMPRESSUM
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
