import React from 'react';
import ExperienceItem from './experience';
import {experiences} from './experience-list';

function Experience() {
  return (
    <div className='niko-sc niko-sc--experience'>
      <div className='niko-sc__exp-educ-list'>
        <div className='niko-sc__exp'>

          <div className='niko-sc__experience-title-wrap niko-sc__title-wrap'>
            <i className='niko-sc__title-icon fas fa-briefcase'/>
            <h3 className='niko-sc__experience-title niko-sc__title'>exprerience</h3>
          </div>

          <div className='niko-sc__experience-list'>
            {
              experiences.map(experience => <ExperienceItem key={experience.id} experience={experience}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
