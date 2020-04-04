import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from './menu';
import Person from './person';
import '../../styles/global.scss';

function DefaultLayout({component: Component, hasTab, hasSelector, fetchOffices, selectOffice, office, ...otherProps}) {
  return (
    <Route {...otherProps} render={matchProps => (
      <div className='App'>
        <div className='site-content__inner'>
          <div className='container height-100'>
            <div className='row height-100 overflow-hidden'>
              <div className='col-lg-6 p-0 site-content__inner-left'>
                <div className='site-content__head'>
                  <Menu/>
                  <Person/>
                </div>
              </div>

              <div className='col-lg-6 p-0 site-content__inner-right'>
                <div className='site-content__page'>

                  <div className='site-content__page-wrap mCustomScrollbar'>

                    <Scrollbars autoHide>

                    <div className='mCustomScrollBox' tabIndex='0' style={{maxHeight: 'none'}}>
                      <div className='mCSB_container' style={{position: 'relative', top: 0, left: 0,}} dir='ltr'>

                        <div className='niko-sc'>
                          <Component {...matchProps}/>
                        </div>

                      </div>
                    </div>
                    </Scrollbars>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}/>
  );
}

export default withRouter(DefaultLayout);
