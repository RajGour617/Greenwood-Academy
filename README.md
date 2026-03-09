# Greenwood Academy - React Version

A modern React.js implementation of the Greenwood Academy website built with Vite, React Router, and Tailwind CSS.

## Features

- 🎨 **Modern React Architecture** - Component-based design with reusable components
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🌙 **Dark/Light Mode** - Theme toggle with localStorage persistence
- 🚀 **React Router** - Client-side routing for seamless navigation
- 📊 **Dynamic Content** - JSON-driven content management
- 🎠 **Interactive Components** - Carousels, sliders, and form validation
- 🔐 **Multi-Role Login** - Separate login forms for Student/Admin/Faculty
- ✅ **Form Validation** - Comprehensive contact form with error handling

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation with dropdown and theme toggle
│   ├── HeroBanner.jsx  # Hero section with CTA buttons
│   ├── Stats.jsx       # Animated statistics counter
│   ├── AboutSection.jsx # About section with features
│   ├── Academics.jsx   # Academic programs grid
│   ├── CampusGallery.jsx # Image gallery with lightbox
│   ├── Testimonials.jsx # Testimonial carousel
│   ├── ContactForm.jsx # Contact form with validation
│   ├── Footer.jsx      # Footer component
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── AboutPage.jsx   # About page
│   ├── AcademicsPage.jsx # Academics page
│   ├── AdmissionsPage.jsx # Admissions page
│   ├── ContactPage.jsx # Contact page
│   └── LoginPage.jsx   # Multi-role login page
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme management hook
├── data/               # Content data
│   └── content.json    # All website content
├── App.jsx             # Main app component with routing
└── index.css           # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
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

### Building for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Content Management

All website content is managed through `src/data/content.json`.

## Routing

- `/` - Home page
- `/about` - About page
- `/academics` - Academics page
- `/admissions` - Admissions page
- `/contact` - Contact page
- `/login` - Login page
- `/login/:type` - Role-specific login (student/admin/faculty)

## Images

Add images to `public/images/` directory and update paths in `content.json`.
