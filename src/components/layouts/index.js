import React from 'react';
import {Route, withRouter} from 'react-router-dom';
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
                  <div className='site-content__page-wrap mCustomScrollbar _mCS_3'>
                    <div id='mCSB_3' className='mCustomScrollBox mCS-light mCSB_vertical mCSB_inside' tabIndex='0'
                         style={{maxHeight: 'none',}}>
                      <div id='mCSB_3_container' className='mCSB_container'
                           style={{position: 'relative', top: 0, left: 0,}} dir='ltr'>

                        <Component {...matchProps}/>

                        {/*<div*/}
                          {/*id='mCSB_3_scrollbar_vertical'*/}
                          {/*className='mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical'*/}
                          {/*style={{display: 'block'}}*/}
                        {/*>*/}
                          {/*<div className='mCSB_draggerContainer'>*/}
                            {/*<div*/}
                              {/*id='mCSB_3_dragger_vertical'*/}
                              {/*className='mCSB_dragger'*/}
                              {/*style={{*/}
                                {/*position: 'absolute',*/}
                                {/*minHeight: '30px',*/}
                                {/*display: 'block',*/}
                                {/*height: '92px',*/}
                                {/*maxHeight: '404px',*/}
                                {/*top: '82px',*/}
                              {/*}}*/}
                            {/*>*/}
                              {/*<div className='mCSB_dragger_bar' style={{lineHeight: '30px'}}/>*/}
                            {/*</div>*/}
                            {/*<div className='mCSB_draggerRail'/>*/}
                          {/*</div>*/}
                        {/*</div>*/}
                      </div>
                    </div>
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
