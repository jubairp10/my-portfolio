# Portfolio Setup Guide

## 🚀 Quick Start

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons (icon library)
- React Router DOM (navigation)

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### Adding Your Profile Picture

1. Add your profile image to `public/` folder (e.g., `profile.jpg`)
2. Open `src/components/Hero.jsx`
3. Replace the placeholder div with:
```jsx
<img 
  src="/profile.jpg" 
  alt="Jubair P" 
  className="w-full h-full object-cover rounded-full"
/>
```

### Adding Your Resume

1. Place your resume PDF in the `public/` folder as `resume.pdf`
2. The download button in the Hero section will automatically work

### Updating Personal Information

All personal information is hardcoded in the components. Update these files:
- `src/components/Hero.jsx` - Name, title, contact info
- `src/components/About.jsx` - About description
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project details
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Education.jsx` - Educational background
- `src/components/Certifications.jsx` - Certifications
- `src/components/Contact.jsx` - Contact information

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Modifying Animations

Animations are handled by Framer Motion. Adjust animation parameters in each component file.

## 🎨 Design Features

- **Glassmorphism**: Modern glass effect cards
- **Gradient Backgrounds**: Animated gradient backgrounds
- **Smooth Animations**: Framer Motion powered animations
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Built with dark mode in mind
- **Hover Effects**: Interactive hover effects on cards and buttons

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Tech Stack Details

- **React 18**: Latest React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready animation library
- **React Icons**: Popular icon library

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📧 Contact Form Integration

The contact form currently shows a success message. To make it functional:

### Option 1: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `src/components/Contact.jsx` with EmailJS integration

### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Update form action to your Formspree endpoint

### Option 3: Backend API
Create your own backend API to handle form submissions

## 🐛 Troubleshooting

### Port already in use
Change the port in `vite.config.js`:
```js
server: {
  port: 3001, // Change to any available port
}
```

### Animations not working
Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

### Styling issues
Clear cache and rebuild:
```bash
rm -rf node_modules
npm install
npm run dev
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

Built with ❤️ using React, Tailwind CSS, and Framer Motion
