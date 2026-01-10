# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional skills, projects, and experience.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Professional Sections**: Hero, About, Skills, Projects, Experience, and Contact
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Development**: Vite for lightning-fast development and build times

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **CSS3** - Modern CSS with custom properties and Grid/Flexbox
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Portfolio projects
│   ├── Experience.jsx  # Work experience
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer section
│   └── *.css           # Component styles
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The website will open in your browser at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the description and subtitle
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update personal description
   - Modify statistics (years of experience, projects, clients)
   - Change feature descriptions

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Add/remove skills as needed

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace sample projects with your actual projects
   - Update project descriptions, technologies, and links
   - Add real project images

5. **Experience Section** (`src/components/Experience.jsx`):
   - Update work experience details
   - Modify company names, positions, and achievements
   - Update company URLs

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Modify social media links
   - Update contact form handling

7. **Footer** (`src/components/Footer.jsx`):
   - Update name and description
   - Modify social media links

### Styling
- **Colors**: Update CSS variables in `src/index.css` to match your brand
- **Fonts**: Change the Google Fonts import in `index.html`
- **Images**: Replace placeholder images with your actual photos

### Contact Form
The contact form currently simulates submission. To make it functional:

1. **Email Service**: Integrate with services like EmailJS, Formspree, or your own backend
2. **Backend API**: Create an API endpoint to handle form submissions
3. **Validation**: Add client-side and server-side validation

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first CSS approach
- Breakpoints for tablets and desktops
- Touch-friendly navigation
- Optimized layouts for all screen sizes

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect Vite settings
3. Deploy with default settings

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Deploy: `npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Why Vite?

- **Lightning Fast**: Instant server start and hot module replacement
- **Modern Build**: Uses ES modules for faster builds
- **Rich Features**: Built-in TypeScript, JSX, and CSS support
- **Optimized**: Better tree-shaking and code splitting
- **Developer Experience**: Faster feedback loop and better debugging

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy Coding! 🎉** 