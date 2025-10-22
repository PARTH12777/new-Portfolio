# ⚡ Parth Patidar's Portfolio ⚡

A stunning, anime-inspired portfolio website featuring thunderstorm animations, glassmorphism design, and modern web technologies. Built for Parth Patidar - Full Stack Developer, passionate coder, and future entrepreneur.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## 🌟 Features

### 🎨 Visual Design
- **Thunderstorm Animation Effects** - Dynamic lightning, rain, and cloud animations
- **Shooting Stars** - Beautiful cosmic animations across the background
- **Glassmorphism Cards** - Modern frosted glass effect design
- **Anime-Inspired Aesthetics** - Bold colors and dynamic visual elements
- **Neon Blue & Purple Theme** - Striking color scheme with glowing effects
- **Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions

### ⚡ Interactive Elements
- **Typing Animation** - Dynamic role descriptions with typewriter effect
- **Floating Particles** - Interactive particle.js background
- **3D Character Animation** - Floating character with orbital tech icons
- **Hover Effects** - Smooth animations on all interactive elements
- **Scroll Animations** - GSAP-powered scroll-triggered animations
- **Mobile-Responsive Navigation** - Hamburger menu with smooth transitions

### 🛠️ Technical Features
- **Modern Web Stack** - HTML5, CSS3, Vanilla JavaScript
- **Backend Integration** - Node.js + Express server
- **Email System** - Nodemailer for contact form functionality
- **Performance Optimized** - Lazy loading, debounced events, smooth scrolling
- **SEO Friendly** - Semantic HTML and meta tags
- **Accessibility** - Screen reader friendly and keyboard navigation

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Tablet & Desktop** - Seamless experience across devices
- **Touch-Friendly** - Enhanced mobile interactions
- **Cross-Browser Compatible** - Works on all modern browsers

## 🚀 Demo

🔗 **Live Demo**: [View Portfolio](https://your-domain.com)
📧 **Contact**: patidarparth2660@gmail.com
💼 **LinkedIn**: [Parth Patidar](https://www.linkedin.com/in/parth-patidar-25a927290)

## 📁 Project Structure

```
portfolio/
├── 📄 index.html          # Main HTML file
├── 🎨 style.css           # Comprehensive styling
├── ⚡ script.js           # Interactive functionality
├── 🖥️ server.js           # Backend server
├── 📦 package.json        # Dependencies
├── 🔧 .env.example        # Environment variables template
├── 📖 README.md           # This file
└── 🌐 assets/             # Additional assets (if any)
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)
- Gmail account (for contact form functionality)

### 1. Clone the Repository
```bash
git clone https://github.com/PARTH12777/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy the environment template
cp .env.example .env

# Edit the .env file with your email credentials
nano .env  # or use your preferred editor
```

**Required Environment Variables:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3000
```

### 4. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://support.google.com/accounts/answer/185833)
3. Generate a new App Password for "Mail"
4. Use this password in your `.env` file

### 5. Start the Development Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

### 6. Open in Browser
Visit `http://localhost:3000` to view the portfolio

## 📧 Contact Form Setup

The contact form sends emails to `patidarparth2660@gmail.com` and includes:
- ✅ Input validation
- 🛡️ Rate limiting (5 requests per 15 minutes)
- 📨 Auto-reply to sender
- 🎨 Beautiful HTML email templates
- 🔒 Secure CORS configuration

## 🎨 Customization

### Colors & Theme
The portfolio uses CSS custom properties for easy customization:

```css
:root {
    --accent-blue: #00d4ff;
    --accent-purple: #6366f1;
    --accent-red: #ff3366;
    /* Modify these values to change the color scheme */
}
```

### Content Updates
- **Personal Information**: Update the HTML content in `index.html`
- **Projects**: Modify the projects section with your own work
- **Skills**: Update skill percentages and technologies
- **Social Links**: Replace with your social media profiles

### Animations
- **Particles**: Configure in `script.js` `initParticles()` function
- **Thunderstorm**: Adjust timing and intensity in CSS keyframes
- **GSAP Animations**: Modify in `initGSAPAnimations()` function

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .
# Environment variables: Set in Netlify dashboard
```

### Heroku
```bash
# Create Heroku app
heroku create your-portfolio-name

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password

# Deploy
git push heroku main
```

## 🧰 Technologies Used

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)
- ![Particles.js](https://img.shields.io/badge/Particles.js-000000?style=flat&logo=javascript&logoColor=white)

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9D58?style=flat&logo=gmail&logoColor=white)

### Libraries & Tools
- **GSAP** - Professional animations
- **Particles.js** - Interactive background particles
- **Font Awesome** - Icons
- **Google Fonts** - Poppins typography
- **Helmet.js** - Security headers
- **Express Rate Limit** - API protection

## 📱 Browser Support

| Chrome | Firefox | Safari | Edge | Opera |
|--------|---------|--------|------|-------|
| ✅ 90+ | ✅ 88+  | ✅ 14+ | ✅ 90+ | ✅ 76+ |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Parth Patidar

**Full Stack Developer | Passionate Coder | Future Entrepreneur**

- 🎓 **Education**: Computer Science, Poornima College of Engineering & Technology
- 📍 **Location**: Jaipur, Rajasthan
- 💼 **Interests**: UI/UX Design, Full Stack Development, Trading, Gaming, Cooking
- 🎯 **Goals**: CODER | FOODIE | TRAVELLER | TRADER | FINANCER | ENTREPRENEUR

### 🔗 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/parth-patidar-25a927290)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PARTH12777)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@chanellwlcm)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/parthth__)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+919509843596)

## 🎉 Acknowledgments

- Inspired by modern anime aesthetics and cyberpunk design
- Thunderstorm effects inspired by nature's beauty
- Special thanks to the open-source community
- Built with ❤️ and lots of ☕

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Built with ⚡ and passion by Parth Patidar**