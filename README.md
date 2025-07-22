# Codia Tech Website

A professional presentation website for Codia Tech, showcasing software services, mobile applications, and technical consulting.

## Project Structure

```
site/
├── index.html              # Main HTML file with component loading
├── components/             # HTML components
│   ├── header.html         # Navigation header
│   ├── hero.html           # Hero section
│   ├── services.html       # Services section
│   ├── about.html          # About section
│   ├── contact.html        # Contact section
│   └── footer.html         # Footer
├── css/                    # Stylesheets
│   ├── styles.css          # Base styles and utilities
│   ├── header.css          # Header/navigation styles
│   ├── hero.css            # Hero section styles
│   ├── services.css        # Services section styles
│   ├── about.css           # About section styles
│   ├── contact.css         # Contact section styles
│   └── footer.css          # Footer styles
├── js/                     # JavaScript files
│   └── main.js             # Main JavaScript functionality
├── logo.png                # Company logo
├── favicon.ico             # Site favicon
└── CNAME                   # GitHub Pages custom domain
```

## Features

- **Modular Architecture**: Separated components for easy maintenance
- **Responsive Design**: Works on all device sizes
- **Modern Styling**: Clean, professional appearance
- **Interactive Elements**: Smooth scrolling, animations, form handling
- **Component-Based**: Easy to update individual sections
- **SEO Optimized**: Proper meta tags and structure

## Components

### Header (`components/header.html`)

- Navigation menu
- Company logo
- Responsive design

### Hero (`components/hero.html`)

- Welcome message
- Call-to-action button
- Company tagline

### Services (`components/services.html`)

- Six service cards:
  - Software Development
  - Mobile Applications
  - Technical Consulting
  - System Integration
  - Cloud Solutions
  - Digital Transformation

### About (`components/about.html`)

- Company description
- Feature highlights
- Team image

### Contact (`components/contact.html`)

- Contact information
- Contact form
- Company details

### Footer (`components/footer.html`)

- Copyright information
- Company tagline

## CSS Structure

### Base Styles (`css/styles.css`)

- CSS reset
- Typography
- Common utilities
- Animations
- Responsive breakpoints

### Component Styles

Each component has its own CSS file for:

- Specific styling
- Layout properties
- Hover effects
- Component-specific responsive rules

## JavaScript Functionality (`js/main.js`)

- Smooth scrolling navigation
- Fade-in animations on scroll
- Form submission handling
- Component loading system

## Development

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Use a local server for best results (e.g., Live Server extension in VS Code)

### Making Changes

#### Updating Content

- Edit the respective component file in the `components/` directory
- Changes will be reflected when the page is refreshed

#### Updating Styles

- Edit the appropriate CSS file in the `css/` directory
- Component-specific styles go in their respective files
- Global styles go in `styles.css`

#### Adding New Sections

1. Create a new HTML component in `components/`
2. Create a new CSS file in `css/`
3. Add the CSS link to `index.html`
4. Add a placeholder div and loading call in `index.html`

## Deployment

The site is designed to work with GitHub Pages or any static hosting service. Simply upload all files to your hosting provider.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and tablet devices
- Graceful degradation for older browsers

## Customization

### Colors

The site uses a consistent color scheme:

- Primary: `#01193a` (Dark blue)
- Secondary: `#019acc` (Light blue)
- Neutral: `#f8f9fa` (Light gray)

### Fonts

- Primary font: Arial, sans-serif
- Can be easily changed in `css/styles.css`

### Logo

- Replace `logo.png` with your own logo
- Update `favicon.ico` for browser tab icon

## Performance

- Modular CSS for faster loading
- Optimized images
- Minimal JavaScript
- Component-based loading for better organization
