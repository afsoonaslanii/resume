import React from 'react'
import EducationItem from './education';
import {educations} from './education-list';
import {certificates} from './certificates-list';

function Education() {
  return (
    <div className='niko-sc niko-sc--experience'>
      <div className='niko-sc__exp-educ-list'>
        <div className='niko-sc__educ'>
          <div className='niko-sc__experience-title-wrap niko-sc__title-wrap'>
            <i className='niko-sc__experience-title-icon niko-sc__title-icon fas fa-user-graduate'/>
            <h3 className='niko-sc__experience-title niko-sc__title'>education</h3>
          </div>


          <div className='niko-sc__experience-list'>
            {
              educations.map(education => <EducationItem key={education.id} education={education}/>)
            }

            <div className='niko-sc__experience-title-wrap niko-sc__title-wrap'>
              <i className='niko-sc__experience-title-icon niko-sc__title-icon fas fa-award'/>
              <h3 className='niko-sc__experience-title niko-sc__title'>certificates</h3>
            </div>

            {
              certificates.map(certificate => <EducationItem key={certificate.id} education={certificate}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
