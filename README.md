# Harry Potter Website

A responsive React website for Harry Potter, inspired by fantasticbeasts.com. This website showcases the magical world of Harry Potter with a modern, interactive design.

## Features

- Responsive design that works on all devices
- Interactive components and animations
- Beautiful UI with Harry Potter themed styling
- Gallery with lightbox functionality
- Video trailer section
- Character showcase

## Technologies Used

- React
- CSS3 with custom properties
- Responsive design
- Modern JavaScript (ES6+)

## Getting Started

Follow these steps to run the website locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone [repository-url]
```

2. Navigate to the project directory:
```
cd harry-potter-website
```

3. Install dependencies:
```
npm install
```

### Running the Application

To run the application in development mode:

```
npm start
```

The website will open in your browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production:

```
npm run build
```

The build files will be created in the `build` folder, ready to be deployed.

## Deployment

This website can be easily deployed to various platforms:

### Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### Vercel

1. Install Vercel CLI:
```
npm install -g vercel
```

2. Deploy using Vercel:
```
vercel
```

### GitHub Pages

1. Install gh-pages package:
```
npm install --save-dev gh-pages
```

2. Add these scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Deploy:
```
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Main page sections
├── assets/             # Images and other static assets
└── styles/             # Global styles
```

## License

This project is for educational purposes only. Harry Potter and all related characters and elements are trademarks of and © Warner Bros. Entertainment Inc.
