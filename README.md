# 🗂️ Redesign UI with React

## 🎯 **Goals**
- Redesign the look and feel with `TailwindCSS` while keeping the core functionality of the original version.
- Focus on clean, maintainable code, responsiveness and UI/UX improvements.
- Incorporate the page with responsiveness and animations.
- Fetching skips data from the API.
---

## 🎨 **Design Updates**

### ✅ **General**
- Applied dark background shades using custom utility classes (`bg-mydark-*`).
- Chosen primary accent color: **Vibrant Purple (#8b5cf6)**.
- Used larger rounded corners (`rounded-xl`, `rounded-2xl`) for a modern look.
- Applied smooth transitions and scaling effects (`hover:scale-105`, `transition-all`, `duration-300`).

---

### ✅ **Component Changes**

#### 📌 **Header.jsx**
- Converted into a sticky top bar with a backdrop blur effect.
- Replaced text separators with a horizontal progress line.
- Icons placed inside circular indicators with dynamic colors.
- Fully scrollable on small screens.

#### 📌 **SkipCard.jsx**
- Elevated card design with `shadow-lg` and smooth hover scaling.
- Glassmorphism-inspired price badges.
- Buttons redesigned with modern colors and full-width on mobile.
- Transitioned to a cleaner layout using `rounded-2xl` and improved typography.

#### 📌 **BottomNavbar.jsx**
- Redesigned as a floating, glass-like bottom navbar with backdrop blur and shadow.
- Buttons now feature modern rounded styles and hover animations.
- Improved mobile layout by stacking buttons vertically on small screens.

#### 📌 **SelectSkipPage.jsx**
- Centered content with improved spacing and readability.
- Introduced an animated spinner for loading state.
- Adjusted padding to prevent content from being hidden behind the navbar.
- Increased heading sizes for modern visual hierarchy.

---

### ✅ **Tailwind CSS Utilities Added**
- Used `backdrop-blur`, `shadow-lg`, and `transition-all` for modern visual effects.
- Custom dark theme colors:
  ```css
  .bg-mydark-0 { background-color: #151515; }
  .bg-mydark-1 { background-color: #1c1c1c; }
  .bg-mydark-2 { background-color: #2a2a2a; }
  .bg-mydark-3 { background-color: #3a3a3a; }
  ```
- Accent Color: **Purple (#8b5cf6)** applied across key interactive elements.

---
