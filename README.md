# Gentrobyte Internships - Application Website

A professional, modern internship application website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-step Application Form**: User-friendly application process
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Accessible**: WCAG compliant components
- **Fast Performance**: Optimized for speed and performance

## 📁 Project Structure

```
gentrobyte-apply-ui/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Gentrobyte page
│   ├── achievements/
│   │   └── page.tsx          # Achievements & testimonials page
│   ├── apply/
│   │   └── page.tsx          # Application form page
│   ├── internships/
│   │   └── page.tsx          # Internship opportunities page
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with Navbar and Footer
│   └── page.tsx              # Home page
├── components/
│   ├── About.tsx             # About section component
│   ├── Achievements.tsx      # Achievements section
│   ├── Apply.tsx             # Multi-step application form
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section with CTA
│   ├── InternshipCard.tsx    # Individual internship card
│   ├── Internships.tsx       # Internships grid section
│   └── Navbar.tsx            # Navigation component
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gentrobyte-apply-ui
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Run linting
```bash
npm run lint
```

## 📄 Pages

### Home (`/`)
- Hero section with compelling headline and CTAs
- Quick preview of key features
- Statistics showcase
- Call-to-action section

### About Gentrobyte (`/about`)
- Company mission, vision, and values
- Timeline of milestones
- Partner universities and organizations
- Company statistics

### Internships (`/internships`)
- Grid of internship opportunities
- Detailed role cards with:
  - Job description
  - Duration and location
  - Required skills
  - Benefits
- Apply button on each card

### Achievements (`/achievements`)
- Company awards and recognitions
- Success stories and testimonials
- Intern placement statistics
- Timeline of achievements

### Apply (`/apply`)
- Multi-step application form:
  - Step 1: Personal Information
  - Step 2: Skills & Portfolio
  - Step 3: Resume Upload
  - Step 4: Review & Submit
- Form validation
- Success confirmation page

## 🎨 Design Features

- **Custom Animations**: Smooth fade-in, slide-up, and blob animations
- **Gradient Backgrounds**: Modern gradient color schemes
- **Hover Effects**: Interactive card and button animations
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Custom Scrollbar**: Branded scrollbar design
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
Update content in component files:
- Internship roles: `components/Internships.tsx`
- Company info: `components/About.tsx`
- Testimonials: `components/Achievements.tsx`

### Styling
Global styles are in `app/globals.css`
Component-specific styles use Tailwind utility classes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, contact us at internships@gentrobyte.com

---

Built with ❤️ by Gentrobyte Team
