# Code Style and Conventions

## TypeScript/React Style
- Functional components with React.FC type
- Props interfaces defined inline or separately
- Arrow functions for component definitions
- UseState hooks for state management

## CSS/Styling Conventions
- Tailwind CSS utility classes
- Custom inline styles for specific fonts
- Apple-inspired typography: SF Pro Display family
- Color scheme: primary (#000), secondary (#111), accent (#e5e7eb), highlight (#a88532)

## Font Strategy
- Primary fonts: PP Editorial New Ultralight, The Seasons
- Fallbacks: SF Pro Display, system fonts
- Font weights: 200-500 range
- Letter spacing: tight (-0.01em to -0.02em)

## Internationalization
- Use `t()` function from useLanguage hook
- Translation keys: 'nav.about', 'hero.title', 'about.p1', etc.
- Three languages: tr (Turkish), en (English), it (Italian)
- Default language: English

## Component Structure
- AnimatedSection wrapper for scroll animations
- Responsive design with md: and lg: breakpoints
- Hover effects with transform and transition classes