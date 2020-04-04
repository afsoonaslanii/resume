import React, {Fragment} from 'react';
import MapContainer from './map-component';


function Contact() {
  return (
    <Fragment>

      <div className='niko-sc__title-wrap'>
        <i className='niko-sc__title-icon fas fa-id-card'/>
        <h3 className='niko-sc__title'>contact me</h3>
      </div>

      <div className='niko-sc__contacts-description'>
        If you have any questions regarding this privacy statement, the practices of this site or your dealings with me,
        please do not hesitate to contact at the above-mentioned address, e-mail address or phone number.
      </div>

      <div className='row mt-5'>
        <div className='col-12'>
          <p>
            <i className='fas fa-map-marker-alt primary-color pr-2'/>
            <span>No. 16 Sarv Alley, Shaban Ali Ave Koohsar Blvd. Shahran Tehran</span>
          </p>
        </div>


        <div className='col-12'>
          <p>
            <i className='fas fa-mobile primary-color pr-2'/>
            <a href='tel:+989037380557'>+98 903 73 80 557</a>
          </p>
        </div>

        <div className='col-12'>
          <p>
            <i className='fas fa-envelope primary-color pr-2'/>
            <a href='mailto:aslani.a7260@mail.com'>aslani.a7260@mail.com</a>
          </p>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-12'>
          <p>follow me on</p>
          <div className='niko-sc__contacts-socials'>
            <ul className='niko-sc__contacts-socials-list'>
              <li>
                <a href='https://www.instagram.com/afsoonaslanii'>
                  <i className='fab fa-instagram'/>
                </a>
              </li>
              <li>
                <a href='https://github.com/afsoonaslanii'>
                  <i className='fab fa-github'/>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/afsoonaslanii'>
                  <i className='fab fa-linkedin-in'/>
                </a>
              </li>
              <li>
                <a href='https://www.t.me/afsoonalanii'>
                  <i className='fab fa-telegram'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=''>
        <MapContainer/>
      </div>


    </Fragment>
  )
}

export default Contact;
