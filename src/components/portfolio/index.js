import React, {Fragment} from 'react';
import {portfolio} from './portfolio-list';
import PortfolioItem from './Portfolio';

function Portfolio() {
  return (
    <Fragment>
      <div className='niko-sc__title-wrap'>
        <i className='niko-sc__title-icon fas fa-brush'/>
        <h3 className='niko-sc__title'>portfolio</h3>
      </div>

      <div className='niko-blog'>
        <div className='niko-blog__list grid'>

          {
            portfolio.map((p, index) => <PortfolioItem key={p.id} portfolio={p} index={index}/>)
          }


        </div>
      </div>
    </Fragment>
  );
}

export default Portfolio;
