import React from 'react';

function PortfolioItem({portfolio}) {
 return(
   <div className='niko-blog__item grid-item '>
     <div className='niko-blog__item-top'>
       <div className='niko-blog__item-img'>
         <img width='460' height='268'
              src={require(`../../static/images/${portfolio.img}`)}
              className='wp-post-image' alt={portfolio.name}
              sizes='(max-width: 460px) 100vw, 460px'/>
       </div>
     </div>
     <div className='niko-blog__item-bottom'>
       <a href={portfolio.link} className='niko-blog__item-title'>{portfolio.name}</a>
       <div className='niko-blog__item-date-bottom'>
           April 2, 2019
       </div>
       <div className='niko-blog__item-excerpt'>
         <p>
           {portfolio.description}
         </p>
       </div>
     </div>
   </div>
 )
}

export default PortfolioItem;
