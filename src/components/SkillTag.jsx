import React from 'react';
import './SkillTag.css';

function SkillTag({ skill }) {
  return (
    <span className="skill-tag">
      {skill}
    </span>
  );
}

export default SkillTag;
