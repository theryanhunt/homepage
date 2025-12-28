# Personal Website

A clean, professional, and minimal personal website built with React and Vite.

## Features

- **Homepage**: Welcome section with quick links to other pages
- **Career Page**: Showcase your professional experience, education, and skills
- **Journal/Blog**: Share your thoughts and insights with a clean blog interface

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personalize Your Content

1. **Homepage** (`src/pages/Home.jsx`):
   - Update your name and professional title
   - Modify the hero description and about section

2. **Career Page** (`src/pages/Career.jsx`):
   - Update the `experiences` array with your work history
   - Update the `education` array with your academic background
   - Update the `skills` array with your technical skills

3. **Navigation** (`src/components/Navigation.jsx`):
   - Replace "Your Name" with your actual name

4. **Blog Posts** (`src/data/blogPosts.js`):
   - Add, edit, or remove blog posts
   - Each post should have: id, title, date, excerpt, content, and tags

### Styling

All styling uses CSS custom properties defined in `src/index.css`. You can customize:

- Colors (text, background, accent)
- Typography
- Spacing
- And more

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Career.jsx
│   │   ├── Career.css
│   │   ├── Journal.jsx
│   │   ├── Journal.css
│   │   ├── BlogPost.jsx
│   │   └── BlogPost.css
│   ├── data/
│   │   └── blogPosts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
