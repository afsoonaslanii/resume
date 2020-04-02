import React from 'react';

function EducationItem({education}) {
  return (
    <div className='niko-sc__experience-item'>

      <h5 className='niko-sc__experience-name'>{education.name}</h5>
      <div className='niko-sc__experience-period'>
        <span className='niko-sc__experience-start'>{education.from}</span>
        <span className='niko-sc__experience-end'>{education.to}</span>
      </div>
      <div className='niko-sc__experience-region'>{education.region}</div>
      <div className='niko-sc__experience-description'>{education.description}</div>
    </div>
  )
}

export default EducationItem;
