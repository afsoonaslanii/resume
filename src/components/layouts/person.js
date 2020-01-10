import React from 'react';

function Person() {
  return (
    <div className="person">
      <div className="person__avatar">
        <img className='d-none' src="../../static/images/Afsoon-Aslani.jpg" alt="afsoon-aslani"/>
        <div className="person__info">

          <h2 className="person__name">Afsoon Aslani</h2>
          <div className="person__position">
            <span>Web Developer</span>
          </div>
          <div className="person__socials">
            <ul className="person__socials-list">
              <li>
                <a href="https://www.facebook.com/afsoonaslani">
                  <i className="fa-facebook"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/afsoonaslanii">
                  <i className="fab fa-github"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/afsoonaslanii">
                  <i className="fab fa-linkedin-in"/>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/">
                  <i className="fa-behance"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Person;
