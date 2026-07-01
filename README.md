# Keshav Dev Sharma - Portfolio Website

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 👨‍💻 Updated profile focused on Full-Stack Development and Applied AI
- 📄 Embedded resume preview and one-click PDF download
- 🧠 Detailed skill matrix across frontend, backend, AI/LLM, and tools
- 🚀 Project highlights including Android + local LLM and full-stack work
- 🌐 Open-source contribution highlights
- 📱 Fully responsive layout with smooth scrolling navigation
- ⚡ Fast performance with Vite

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
│   ├── Projects.jsx      - Projects and open-source highlights
│   └── Contact.jsx       - Contact and social links
├── App.jsx               - Main component
├── main.jsx              - Entry point
└── index.css             - Global styles
```

## Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/Hero.jsx` to update your intro and links
2. **Projects** - Add your projects in `src/components/Projects.jsx`
3. **Resume** - Update education, certifications, and skills in `src/components/Resume.jsx`
4. **Contact** - Update links and footer details in `src/components/Contact.jsx`

### Styling

All styling uses Tailwind CSS classes. You can customize colors, spacing, and other properties in `index.html` where Tailwind is configured.

## Links

- **GitHub**: https://github.com/hwkds
- **LinkedIn**: https://www.linkedin.com/in/keshavdevsharma/

## License

MIT License - feel free to use this template for your own portfolio!
