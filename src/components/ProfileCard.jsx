import React from 'react';
import SkillTag from './SkillTag';
import SocialLinks from './SocialLinks';
import './ProfileCard.css';

function ProfileCard({ profile, theme }) {
  const { name, title, location, bio, avatar, skills, social } = profile;
  const themeClass = theme ? `card-theme-${theme}` : "";
  return (
    <div className={`profile-card ${themeClass}`}>
      <div className="profile-header">
        <div className="avatar-container">
          <img 
            src={avatar} 
            alt={`${name}'s avatar`} 
            className="avatar"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150x150/667eea/ffffff?text=' + name.charAt(0);
            }}
          />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-title">{title}</p>
          <p className="profile-location">📍 {location}</p>
        </div>
      </div>
      
      <div className="profile-body">
        <p className="profile-bio">{bio}</p>
        
        <div className="skills-section">
          <h4 className="skills-title">Skills</h4>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
        
        <SocialLinks social={social} />
      </div>
    </div>
  );
}

export default ProfileCard;
