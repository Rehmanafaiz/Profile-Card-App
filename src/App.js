import React from 'react';
import Header from './components/Header';
import ProfileCardList from './components/ProfileCardList';
import './App.css';

// Sample profile data - in a real app this could come from an API
const profilesData = [
  {
    id: 1,
    name: "Ayesha Khan",
    title: "Frontend Developer",
    location: "Karachi, Pakistan",
    bio: "Passionate about creating beautiful and functional user interfaces. Love working with React and modern CSS.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/ayeshakhan",
      twitter: "https://twitter.com/ayeshakhan"
    },
    theme: "blue"
  },
  {
    id: 2,
    name: "Ahmad Ali",
    title: "Full Stack Developer",
    location: "Lahore, Pakistan",
    bio: "Building scalable web applications with modern technologies. Enthusiast of clean code and agile methodologies.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skills: ["Node.js", "React", "MongoDB", "Express"],
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/ahmadali",
      twitter: "https://twitter.com/ahmadali"
    },
    theme: "purple"
  },
  {
    id: 3,
    name: "Fatima Sheikh",
    title: "UI/UX Designer",
    location: "Islamabad, Pakistan",
    bio: "Creating intuitive and delightful user experiences. Passionate about user research and design systems.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/fatimasheikh",
      twitter: "https://twitter.com/fatimasheikh"
    },
    theme: "green"
  },
  {
    id: 4,
    name: "Hassan Ahmed",
    title: "Backend Developer",
    location: "Peshawar, Pakistan",
    bio: "Specialized in building robust APIs and microservices. Love working with cloud technologies and DevOps.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    skills: ["Python", "Django", "AWS", "Docker"],
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/hassanahmed",
      twitter: "https://twitter.com/hassanahmed"
    },
    theme: "orange"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ProfileCardList profiles={profilesData} />
      </main>
    </div>
  );
}

export default App;
