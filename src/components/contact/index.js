import React, {Fragment} from 'react';

// import MapContainer from './map-component';

function Contact() {
  return (
    <Fragment>
      <header className='entry-header'>
        <h1 className='entry-title'>contact me</h1>
      </header>

      <div className='niko-sc__contacts-description'>
        If you have any questions regarding this privacy statement, the practices of this site or your dealings with me,
        please do not hesitate to contact at the above-mentioned address, e-mail address or phone number.
      </div>

      {/*<div className='map-container'>*/}
      {/*<MapContainer/>*/}
      {/*</div>*/}

      <div className='row mt-5'>

        <div className='col-12'>
          <i className='fas fa-map-marker-alt primary-color pr-2'/>
          <span>No. 16 Sarv Alley, Shaban Ali Ave Koohsar Blvd. Shahran Tehran</span>
        </div>


        <div className='col-6'>
          <i className="fas fa-mobile primary-color pr-2"/>
          <a href='tel:+989037380557'>+98 903 73 80 557</a>
        </div>

        <div className='col-6'>
          <i className="fas fa-envelope primary-color pr-2"/>
          <a>aslani.a7260@mail.com</a>
        </div>

      </div>

    </Fragment>
  )
}

export default Contact;
