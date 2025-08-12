# Profile Card App - React

A modern, responsive React application that displays profile cards with a clean, interactive, and feature-rich UI.

## 🚀 Features

✅ **Reusable Components**: Modular React components for easy maintenance
✅ **Props-based Data Flow**: All data passed via props
✅ **Responsive Design**: Works on desktop, tablet, and mobile
✅ **Modern UI**: Glassmorphism effects, vibrant colors, and smooth transitions
✅ **Dark Mode Toggle**: Instantly switch between light and dark themes
✅ **Profile Badges**: Highlight top performers, team leads, etc.
✅ **WhatsApp Contact Button**: Direct chat with each profile
✅ **Copy Email/Phone Button**: One-click copy to clipboard
✅ **Skill Tooltips**: Hover on skills to see descriptions
✅ **Card Hover Animation**: Zoom and shadow effect on hover
✅ **Social Icon Color Change**: Social icons animate on hover
✅ **Proper Structure**: Organized component hierarchy

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with title
│   ├── Header.css
│   ├── ProfileCardList.jsx  # Container for all profile cards
│   ├── ProfileCardList.css
│   ├── ProfileCard.jsx      # Individual profile card
│   ├── ProfileCard.css
│   ├── SkillTag.jsx         # Individual skill badge
│   ├── SkillTag.css
│   ├── SocialLinks.jsx      # Social media links
│   └── SocialLinks.css
├── App.jsx                  # Main app component
├── App.css
├── index.js                 # React entry point
└── index.css                # Global styles
```

## 🧩 Component Hierarchy

```
App
├── Header
└── ProfileCardList
    └── ProfileCard (multiple)
        ├── SkillTag (multiple)
        └── SocialLinks
```

## 📦 Data Structure

Each profile contains:
- Personal info (name, title, location, bio)
- Avatar image
- Skills array (with tooltips)
- Social media links (LinkedIn, GitHub, Twitter, WhatsApp)
- Contact info (email, phone)
- Profile badge (role/highlight)

## 🖥️ How to Run

1. **Install Node.js** (if not already installed)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser** to `http://localhost:3000`

## 🏆 Key React Concepts Demonstrated

- **Functional Components**: Modern React function syntax
- **Props**: Data flows from parent to child components
- **Component Composition**: UI broken into reusable pieces
- **Conditional Rendering**: Error handling for images
- **Event Handling**: Image error fallbacks, copy buttons
- **CSS Modules**: Scoped styles for each component

## 📱 Responsive Features

- Grid layout adapts to screen size
- Mobile-first approach
- Flexible social links layout
- Scalable typography and spacing

## 🌗 Dark Mode

- Toggle button for instant dark/light theme switch
- Vibrant accent colors and readable text in both modes

## 🔗 Interactive Elements

- WhatsApp button for direct chat
- Copy buttons for email/phone
- Skill tooltips for quick info
- Card hover animation and social icon color change

## 🌍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive design for all screen sizes
