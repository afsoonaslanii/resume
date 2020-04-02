import React, {Fragment} from 'react';
import Skill from './skill';
import {skillsList} from './skills-list';

function AboutMe() {
  return (
    <Fragment>
      <div className='niko-sc__title-wrap'>
        <i className='niko-sc__title-icon fas fa-quote-left'/>
        <h3 className='niko-sc__title'>summary</h3>
      </div>

      <div className='niko-sc niko-sc--about'>
        <div className='niko-sc__about-description'>
          I am a web developer with 3 years of experience in developing user interfaces,
          and would love to take up challenging projects. My goal is work as a team with minded people.
          where I can ideate freely and use my knowledge to achieve
          excellence experiences and build something truly remarkable I’m always interested in learning and probing
        </div>
      </div>

      <div className='niko-sc niko-sc--skills'>
        <div className='niko-sc__title-wrap'>
          <i className='niko-sc__title-icon fas fa-tachometer-alt'/>
          <h3 className='niko-sc__title'>Skills</h3>
        </div>

        <div className='niko-sc__skills-list'>
          {skillsList.map(skill => <Skill key={skill.id} skill={skill}/>)}
        </div>
      </div>

    </Fragment>

  );
}

export default AboutMe;

