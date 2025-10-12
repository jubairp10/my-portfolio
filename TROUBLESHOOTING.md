# 🔧 Troubleshooting Guide

## White Screen Issue - SOLVED ✅

### Problem
Portfolio shows only a white screen when running `npm run dev`.

### Solution Applied
Fixed the Hero component animation that was causing a render error with `window.innerWidth`.

### Steps to Fix (Already Done)
1. ✅ Removed `window.innerWidth` from animation
2. ✅ Simplified particle animation

---

## How to Verify It's Working

### Step 1: Restart Dev Server
```bash
# Stop the server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 2: Open Browser
Open: **http://localhost:3000**

You should see:
- Animated gradient background
- Navigation bar at top
- Hero section with "JUBAIR P" title
- Smooth animations

### Step 3: Check Browser Console
Press `F12` to open DevTools and check the Console tab.
- ✅ No errors = Working correctly
- ❌ Red errors = Need to fix

---

## Common Issues & Solutions

### Issue 1: White Screen
**Causes:**
- Component render error
- Missing dependencies
- Syntax error in JSX

**Solutions:**
```bash
# 1. Check browser console for errors (F12)
# 2. Restart dev server
npm run dev

# 3. Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Issue 2: Port Already in Use
**Error:** `Port 3000 is already in use`

**Solution:**
Edit `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,  // Change to any available port
    open: true
  }
})
```

### Issue 3: Styles Not Loading
**Symptoms:** Page loads but no colors/styling

**Solution:**
```bash
# Restart dev server
Ctrl+C
npm run dev
```

### Issue 4: Components Not Showing
**Symptoms:** Some sections are missing

**Solution:**
Check browser console for import errors:
```bash
# Verify all files exist
ls src/components/
```

### Issue 5: Animations Not Working
**Symptoms:** Page loads but no animations

**Solution:**
```bash
# Reinstall framer-motion
npm install framer-motion
npm run dev
```

---

## Debug Mode

### Enable Verbose Logging
```bash
npm run dev -- --debug
```

### Check Build
```bash
npm run build
```
If build succeeds, the code is valid.

---

## Quick Fixes

### Fix 1: Nuclear Option (Clears Everything)
```bash
# Delete node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Restart
npm run dev
```

### Fix 2: Check File Paths
Ensure all imports use correct paths:
```jsx
// Correct
import Hero from './components/Hero';

// Wrong
import Hero from './components/hero';  // Case sensitive!
```

### Fix 3: Verify All Components Exist
```bash
# List all components
ls src/components/
```

Should show:
- About.jsx
- Certifications.jsx
- Contact.jsx
- Education.jsx
- Experience.jsx
- Footer.jsx
- Hero.jsx
- Navbar.jsx
- Projects.jsx
- Skills.jsx

---

## Browser-Specific Issues

### Chrome
- Clear cache: `Ctrl+Shift+Delete`
- Hard reload: `Ctrl+Shift+R`

### Firefox
- Clear cache: `Ctrl+Shift+Delete`
- Hard reload: `Ctrl+F5`

### Edge
- Clear cache: `Ctrl+Shift+Delete`
- Hard reload: `Ctrl+F5`

---

## Still Not Working?

### Step-by-Step Debug

1. **Check Terminal Output**
   - Look for error messages
   - Note the line numbers

2. **Check Browser Console**
   - Press F12
   - Look at Console tab
   - Note any red errors

3. **Test Individual Components**
   
   Edit `src/App.jsx` to test one component:
   ```jsx
   function App() {
     return (
       <div className="min-h-screen bg-slate-900 text-white p-8">
         <h1>Testing</h1>
         <Hero />
       </div>
     );
   }
   ```

4. **Verify Dependencies**
   ```bash
   npm list react react-dom framer-motion
   ```

---

## Error Messages & Solutions

### Error: "Cannot find module"
**Solution:**
```bash
npm install
```

### Error: "Unexpected token"
**Solution:** Syntax error in JSX. Check the file mentioned in error.

### Error: "React is not defined"
**Solution:** Add import:
```jsx
import React from 'react';
```

### Error: "Failed to resolve import"
**Solution:** Check file path and extension (.jsx)

---

## Performance Issues

### Slow Loading
1. Check network tab in DevTools
2. Optimize images (< 200KB each)
3. Use production build: `npm run build`

### Laggy Animations
1. Reduce number of animated elements
2. Use `will-change` CSS property
3. Enable GPU acceleration

---

## Contact for Help

If you're still stuck:

1. **Check Documentation**
   - Read `GETTING_STARTED.md`
   - Check `QUICK_REFERENCE.md`

2. **Search for Errors**
   - Copy error message
   - Search on Google/Stack Overflow

3. **Community Help**
   - React Discord
   - Stack Overflow
   - Reddit r/reactjs

---

## Preventive Measures

### Before Making Changes
1. Commit your code: `git commit -am "Working version"`
2. Test in browser
3. Check console for errors

### After Making Changes
1. Save all files
2. Check terminal for errors
3. Refresh browser
4. Check console

---

## Success Checklist

Your portfolio is working if you see:
- ✅ Animated gradient background
- ✅ Navigation bar with links
- ✅ Hero section with name and title
- ✅ Smooth scroll animations
- ✅ All sections loading
- ✅ No console errors
- ✅ Responsive on mobile

---

**Your issue has been fixed! Restart the dev server and it should work now.** 🎉
