# Development Guide

## Running the Site Locally

Due to browser security restrictions (CORS), you cannot simply open `index.html` in a browser when using the modular component structure. You need to serve the files through a local HTTP server.

## Quick Setup Options

### Option 1: Using Python (if Python is installed)

```bash
# Navigate to the site directory
cd /path/to/site

# Python 3
python -m http.server 8000

# Python 2 (if needed)
python -m SimpleHTTPServer 8000
```

Then open: <http://localhost:8000>

### Option 2: Using Node.js (if Node.js is installed)

```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to site directory
cd /path/to/site

# Start server
http-server
```

Then open: <http://localhost:8080>

### Option 3: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Using PHP (if PHP is installed)

```bash
# Navigate to site directory
cd /path/to/site

# Start PHP server
php -S localhost:8000
```

Then open: <http://localhost:8000>

## Troubleshooting

### CORS Errors

If you see fetch errors in the browser console like:

- `Access to fetch at 'file://...' from origin 'null' has been blocked by CORS policy`

This means you're opening the file directly in the browser. Use one of the HTTP server options above.

### Components Not Loading

1. Check browser console for errors
2. Ensure all component files exist in the `components/` directory
3. Verify file paths are correct
4. Make sure you're using an HTTP server, not opening files directly

### JavaScript Errors

1. Open browser developer tools (F12)
2. Check the Console tab for specific error messages
3. Ensure all CSS and JS files are loading correctly

## File Structure Requirements

Make sure your file structure matches:

```
site/
├── index.html
├── components/
│   ├── header.html
│   ├── hero.html
│   ├── services.html
│   ├── about.html
│   ├── contact.html
│   └── footer.html
├── css/
│   ├── styles.css
│   ├── header.css
│   ├── hero.css
│   ├── services.css
│   ├── about.css
│   ├── contact.css
│   └── footer.css
└── js/
    └── main.js
```
