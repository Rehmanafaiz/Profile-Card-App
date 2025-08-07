# Profile Card App - React

A modern, responsive React application that displays profile cards with a clean and interactive UI.

## Features

✅ **Reusable Components**: Built with modular React components
✅ **Props-based Data Flow**: Components receive data through props
✅ **Responsive Design**: Works on desktop, tablet, and mobile
✅ **Modern UI**: Clean design with glass-morphism effects
✅ **Interactive Elements**: Hover effects and smooth transitions
✅ **Proper Structure**: Organized component hierarchy

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with title
│   ├── Header.css
│   ├── ProfileCardList.jsx  # Container for all profile cards
│   ├── ProfileCardList.css
│   ├── ProfileCard.jsx      # Individual profile card
│   ├── ProfileCard.css
│   ├── SkillTag.jsx        # Individual skill badge
│   ├── SkillTag.css
│   ├── SocialLinks.jsx     # Social media links
│   └── SocialLinks.css
├── App.jsx                 # Main app component
├── App.css
├── index.js               # React entry point
└── index.css             # Global styles
```

## Component Hierarchy

```
App
├── Header
└── ProfileCardList
    └── ProfileCard (multiple)
        ├── SkillTag (multiple)
        └── SocialLinks
```

## Data Structure

Each profile contains:
- Personal info (name, title, location, bio)
- Avatar image
- Skills array
- Social media links (LinkedIn, GitHub, Twitter)

## How to Run

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

## Key React Concepts Demonstrated

- **Functional Components**: All components use modern React function syntax
- **Props**: Data flows from parent to child components
- **Component Composition**: Breaking UI into reusable pieces
- **Conditional Rendering**: Error handling for images
- **Event Handling**: Image error fallbacks
- **CSS Modules**: Each component has its own styles

## Responsive Features

- Grid layout that adapts to screen size
- Mobile-first approach
- Flexible social links layout
- Scalable typography and spacing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive design for all screen sizes
