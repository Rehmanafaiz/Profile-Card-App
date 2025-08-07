import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileCardList.css';

function ProfileCardList({ profiles }) {
  return (
    <div className="profile-card-list">
      {profiles.map(profile => (
        <ProfileCard 
          key={profile.id} 
          profile={profile} 
        />
      ))}
    </div>
  );
}

export default ProfileCardList;
