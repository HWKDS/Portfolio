# Keshav Dev Sharma - Portfolio Website

A modern, minimal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Clean, minimal design aesthetic
- 📸 Photo section in hero area
- 📄 Detailed resume section with experience, education & skills
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 🔗 Links to GitHub and LinkedIn profiles
- 📦 Easily customizable sections

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    - Navigation header
│   ├── Hero.jsx          - Landing section with photo
│   ├── Resume.jsx        - Resume section
│   ├── Projects.jsx      - Projects showcase
│   └── Contact.jsx       - Contact/links section
│   └── Contact.jsx       - Contact section
├── App.jsx               - Main component
├── main.jsx              - Entry point
└── index.css             - Global styles
```

## Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/Hero.jsx` to update your intro and links
2. **Projects** - Add your projects in `src/components/Projects.jsx`
3. **Skills** - Update your skills in `src/components/Skills.jsx`
4. **Contact** - Update links in `src/components/Contact.jsx`

### Styling

All styling uses Tailwind CSS classes. You can customize colors, spacing, and other properties in `index.html` where Tailwind is configured.

## Links

- **GitHub**: https://github.com/hwkds
- **LinkedIn**: https://www.linkedin.com/in/keshavdevsharma/

## License

MIT License - feel free to use this template for your own portfolio!
