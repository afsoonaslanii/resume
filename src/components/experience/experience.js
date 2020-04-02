import React from 'react';

function ExperienceItem(props) {
  return(
    <div className='niko-sc__experience-item'>
      <h5 className='niko-sc__experience-name'>{props.experience.position}</h5>
      <div className='niko-sc__experience-region'>{props.experience.company}</div>
      <div className='niko-sc__experience-period'>
        <span className='niko-sc__experience-start'>{props.experience.from}</span>
        <span className='niko-sc__experience-end'>{props.experience.to}</span>
      </div>
      <div className='niko-sc__experience-description'>{props.experience.description}</div>
    </div>
  )
}

export default ExperienceItem;
