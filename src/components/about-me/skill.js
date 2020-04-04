import React from 'react';

function Skill(props) {
  return(
    <div className='niko-sc__skills-item active' data-value={props.skill.value}>
      <span className='niko-sc__skills-name'>{props.skill.title}</span>
      <div className='niko-sc__skills-value'>
        <span className='counter' data-from='0' data-speed='1500' data-to={props.skill.value}>{props.skill.value}</span>%
      </div>
      <div className='niko-sc__skills-line'>
        <div className='active-line' style={{width: `${props.skill.value}%`, opacity: '1',}}/>
      </div>
    </div>
  )
}

export default Skill;
