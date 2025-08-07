import React from 'react';
import './SocialLinks.css';

function SocialLinks({ social }) {
  const socialPlatforms = [
    { name: 'LinkedIn', url: social.linkedin, icon: '💼' },
    { name: 'GitHub', url: social.github, icon: '🐙' },
    { name: 'Twitter', url: social.twitter, icon: '🐦' }
  ];

  return (
    <div className="social-links">
      <h4 className="social-title">Connect</h4>
      <div className="social-buttons">
        {socialPlatforms.map((platform, index) => (
          <a 
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={`Visit ${platform.name}`}
          >
            <span className="social-icon">{platform.icon}</span>
            <span className="social-name">{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
