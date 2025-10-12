# 🎨 Visual Design Guide

## Color Palette

### Primary Colors
```
Cyan-400:    #22d3ee  ████  (Accents, links, highlights)
Cyan-500:    #06b6d4  ████  (Primary buttons, icons)
Blue-500:    #3b82f6  ████  (Secondary accents)
Blue-600:    #2563eb  ████  (Button hover states)
Purple-600:  #9333ea  ████  (Tertiary accents)
```

### Background Colors
```
Slate-900:   #0f172a  ████  (Main background)
Purple-900:  #581c87  ████  (Background gradient)
White/10:    rgba(255,255,255,0.1)  (Glass effect)
White/20:    rgba(255,255,255,0.2)  (Borders)
```

### Text Colors
```
White:       #ffffff  ████  (Headings)
Gray-300:    #d1d5db  ████  (Body text)
Gray-400:    #9ca3af  ████  (Muted text)
Cyan-400:    #22d3ee  ████  (Highlighted text)
```

## Typography Scale

### Headings
```
Hero Title:        text-5xl md:text-7xl (48px / 72px)
Section Titles:    text-4xl md:text-5xl (36px / 48px)
Card Titles:       text-xl md:text-2xl  (20px / 24px)
Subtitles:         text-lg md:text-xl   (18px / 20px)
```

### Body Text
```
Large:    text-lg    (18px)
Regular:  text-base  (16px)
Small:    text-sm    (14px)
Tiny:     text-xs    (12px)
```

## Spacing System

### Section Spacing
```
Vertical Padding:     py-20     (80px top & bottom)
Container Max Width:  max-w-7xl (1280px)
Horizontal Padding:   px-4 sm:px-6 lg:px-8
```

### Component Spacing
```
Card Padding:         p-6 md:p-8  (24px / 32px)
Button Padding:       px-8 py-3   (32px horizontal, 12px vertical)
Gap Between Items:    gap-4 to gap-12 (16px to 48px)
```

## Component Styles

### Glass Effect Card
```css
Background:     bg-white/10
Backdrop Blur:  backdrop-blur-lg
Border:         border border-white/20
Border Radius:  rounded-2xl
Shadow:         shadow-xl
```

### Primary Button
```css
Background:     bg-gradient-to-r from-cyan-500 to-blue-600
Padding:        px-8 py-3
Border Radius:  rounded-full
Font Weight:    font-semibold
Shadow:         shadow-lg
Hover:          hover:from-cyan-600 hover:to-blue-700
                hover:scale-105
```

### Secondary Button
```css
Border:         border-2 border-cyan-500
Padding:        px-8 py-3
Border Radius:  rounded-full
Font Weight:    font-semibold
Hover:          hover:bg-cyan-500/20
```

## Animation Patterns

### Fade In on Scroll
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Slide In from Left
```jsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

### Scale on Hover
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger Children
```jsx
variants={containerVariants}
// Container:
{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}
// Children:
{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

## Layout Patterns

### Two Column Layout
```jsx
<div className="grid md:grid-cols-2 gap-12">
  <div>Left Column</div>
  <div>Right Column</div>
</div>
```

### Three Column Layout
```jsx
<div className="grid md:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Timeline Layout
```jsx
<div className="relative">
  {/* Vertical line */}
  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600" />
  
  {/* Timeline items */}
  <div className="relative">
    <div className="absolute left-8 w-4 h-4 bg-cyan-400 rounded-full" />
    <div className="ml-20">Content</div>
  </div>
</div>
```

## Icon Usage

### Social Icons
```jsx
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

<FiGithub size={24} className="text-cyan-400" />
```

### Tech Stack Icons
```jsx
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';

<SiFlutter size={32} className="text-blue-400" />
```

## Gradient Patterns

### Text Gradient
```jsx
className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
```

### Background Gradient
```jsx
className="bg-gradient-to-r from-cyan-500 to-blue-600"
```

### Animated Background
```jsx
className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
// With animation in CSS
```

## Responsive Design

### Mobile First Approach
```jsx
// Mobile (default)
className="text-base"

// Tablet and up
className="text-base md:text-lg"

// Desktop and up
className="text-base md:text-lg lg:text-xl"
```

### Common Breakpoints
```
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Laptops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large desktops)
```

## Hover States

### Card Hover
```jsx
className="card-hover"
// Defined in index.css:
// transition-all duration-300 
// hover:scale-105 
// hover:shadow-2xl 
// hover:shadow-cyan-500/30
```

### Link Hover
```jsx
className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
```

### Button Hover
```jsx
className="hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
```

## Shadow Effects

### Card Shadow
```jsx
className="shadow-xl"
```

### Glow Effect
```jsx
className="shadow-lg hover:shadow-cyan-500/50"
```

### Custom Glow
```css
box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
```

## Border Styles

### Glass Border
```jsx
className="border border-white/20"
```

### Accent Border
```jsx
className="border-2 border-cyan-500"
```

### Gradient Border (using div wrapper)
```jsx
<div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-0.5 rounded-2xl">
  <div className="bg-slate-900 rounded-2xl p-6">
    Content
  </div>
</div>
```

## Form Styles

### Input Field
```jsx
className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
           focus:outline-none focus:border-cyan-500 text-white 
           placeholder-gray-500 transition-colors duration-300"
```

### Textarea
```jsx
className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
           focus:outline-none focus:border-cyan-500 text-white 
           placeholder-gray-500 transition-colors duration-300 resize-none"
```

## Badge Styles

### Status Badge
```jsx
className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full"
```

### Skill Tag
```jsx
className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full 
           border border-cyan-500/20"
```

## Progress Bar

### Container
```jsx
className="h-2 bg-white/5 rounded-full overflow-hidden"
```

### Fill
```jsx
className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
style={{ width: '90%' }}
```

## Visual Hierarchy

### Primary Elements
- Large text (text-5xl+)
- Gradient text effects
- High contrast (white on dark)
- Prominent shadows

### Secondary Elements
- Medium text (text-xl to text-2xl)
- Cyan color accents
- Glass effect backgrounds
- Subtle shadows

### Tertiary Elements
- Small text (text-sm to text-base)
- Gray text colors
- Minimal backgrounds
- No shadows

## Accessibility

### Focus States
```jsx
className="focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
```

### ARIA Labels
```jsx
aria-label="GitHub Profile"
```

### Semantic HTML
```jsx
<section>, <nav>, <header>, <footer>, <main>
```

## Best Practices

### Do's ✅
- Use consistent spacing (multiples of 4px)
- Maintain color contrast ratios
- Add hover states to interactive elements
- Use semantic HTML
- Provide ARIA labels
- Test on multiple screen sizes

### Don'ts ❌
- Don't mix different animation durations randomly
- Don't use too many different colors
- Don't forget mobile responsiveness
- Don't skip accessibility features
- Don't use inline styles (use Tailwind classes)

## Quick Reference

### Most Used Classes
```
Glass Card:     glass-effect p-6 rounded-2xl
Gradient Text:  gradient-text
Primary Button: btn-primary
Section Title:  section-title gradient-text
Card Hover:     card-hover
```

### Most Used Animations
```
Fade In:        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
Slide Up:       initial={{ y: 20 }} animate={{ y: 0 }}
Scale Hover:    whileHover={{ scale: 1.05 }}
```

### Most Used Icons
```
FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin
SiFlutter, SiDart, SiFirebase, SiPython
```

---

**This guide helps maintain visual consistency throughout the portfolio!** 🎨
