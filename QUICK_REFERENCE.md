# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
npm install          # Install dependencies (first time only)
npm run dev         # Start development server → http://localhost:3000
npm run build       # Build for production → creates dist/ folder
npm run preview     # Preview production build
```

## 📁 Key Files to Edit

| File | What to Update |
|------|----------------|
| `src/components/Hero.jsx` | Name, title, photo, contact info |
| `src/components/About.jsx` | About description, highlights |
| `src/components/Experience.jsx` | Work experience, job details |
| `src/components/Projects.jsx` | Projects, links, descriptions |
| `src/components/Skills.jsx` | Skills, proficiency levels |
| `src/components/Education.jsx` | Educational background |
| `src/components/Certifications.jsx` | Certifications, achievements |
| `src/components/Contact.jsx` | Contact info, form settings |
| `public/resume.pdf` | Your resume file |
| `public/profile.jpg` | Your profile picture |

## 🎨 Common CSS Classes

```css
glass-effect          /* Glass card background */
gradient-text         /* Gradient text effect */
btn-primary          /* Primary button style */
btn-secondary        /* Secondary button style */
section-title        /* Section heading style */
card-hover           /* Card hover animation */
```

## 🎭 Animation Snippets

### Fade In
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Hover Scale
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger Children
```jsx
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}}
```

## 🎨 Color Codes

```
Primary Cyan:   #06b6d4
Primary Blue:   #3b82f6
Accent Purple:  #9333ea
Background:     #0f172a
Text White:     #ffffff
Text Gray:      #d1d5db
```

## 📱 Responsive Breakpoints

```
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Laptops)
xl:  1280px  (Desktops)
```

## 🔗 Important Links

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React Icons**: https://react-icons.github.io/react-icons
- **Vite Docs**: https://vitejs.dev

## 🚀 Deployment Commands

### Vercel
```bash
# Push to GitHub, then import on vercel.com
git push origin main
```

### Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🐛 Quick Fixes

### Clear Cache
```bash
rm -rf node_modules
npm install
```

### Change Port
Edit `vite.config.js`:
```js
server: { port: 3001 }
```

### Fix Styling Issues
```bash
# Restart dev server
Ctrl+C
npm run dev
```

## 📦 Project Structure

```
my portfolio/
├── public/              # Static files
│   ├── resume.pdf      # Your resume
│   └── profile.jpg     # Your photo
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main app
│   └── index.css      # Global styles
├── package.json       # Dependencies
└── vite.config.js     # Build config
```

## ✅ Pre-Deployment Checklist

- [ ] Add profile picture
- [ ] Add resume PDF
- [ ] Update all personal info
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

## 🎯 Component Props Quick Reference

### Navbar
```jsx
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
```

### All Section Components
```jsx
<Hero />
<About />
<Experience />
<Projects />
<Skills />
<Education />
<Certifications />
<Contact />
<Footer />
```

## 🔧 Customization Quick Tips

### Change Colors
`tailwind.config.js` → `theme.extend.colors`

### Add Section
1. Create `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to `Navbar.jsx` links

### Modify Animation Speed
Change `duration` in component:
```jsx
transition={{ duration: 0.6 }} // Slower: 1.0, Faster: 0.3
```

## 📊 Performance Tips

- Optimize images (< 200KB each)
- Use WebP format for images
- Keep bundle size < 500KB
- Test with Lighthouse (aim for 90+)

## 🎨 Icon Libraries Used

```jsx
// Feather Icons
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// Simple Icons (Brand logos)
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';
```

## 📝 Git Commands

```bash
git init                    # Initialize repo
git add .                   # Stage all files
git commit -m "message"     # Commit changes
git push origin main        # Push to GitHub
```

## 🌐 Environment Variables

Create `.env` file for sensitive data:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in code:
```jsx
import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## 🎉 Success Metrics

- **Load Time**: < 2 seconds
- **Lighthouse Score**: 90+
- **Mobile Responsive**: ✅
- **All Links Working**: ✅
- **Contact Form**: ✅
- **Resume Download**: ✅

---

**Keep this file handy for quick reference!** 📌
