# 🚀 Deployment Guide - Parth Patidar's Portfolio

This guide will help you deploy the portfolio website to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env` file)
- [ ] Gmail App Password generated and set
- [ ] Contact form tested locally
- [ ] All personal information updated in HTML
- [ ] Social media links verified

## 🌐 Platform-Specific Deployment

### 1. Vercel (Recommended - Free)

Vercel is perfect for this portfolio as it supports both static files and serverless functions.

#### Setup Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   Go to your Vercel dashboard and add:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASS`: your-gmail-app-password
   - `NODE_ENV`: production

5. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

#### Vercel Configuration

Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    },
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
```

### 2. Netlify

#### Setup Steps:

1. **Connect Repository**
   - Go to Netlify.com
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.`

3. **Environment Variables**
   Add in Netlify dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `NODE_ENV=production`

4. **Netlify Functions**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "."
     functions = "netlify/functions"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

### 3. Heroku

#### Setup Steps:

1. **Install Heroku CLI**
   ```bash
   # Mac
   brew install heroku/brew/heroku
   
   # Windows
   # Download from heroku.com
   ```

2. **Login and Create App**
   ```bash
   heroku login
   heroku create parth-patidar-portfolio
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

#### Heroku Procfile

Create `Procfile`:
```
web: node server.js
```

### 4. DigitalOcean App Platform

#### Setup Steps:

1. **Connect Repository**
   - Go to DigitalOcean Apps
   - Connect GitHub repository

2. **Configure Service**
   - Type: Web Service
   - Build Command: `npm install`
   - Run Command: `npm start`

3. **Environment Variables**
   - Add all required environment variables
   - Set HTTP Port to 8080

### 5. Railway

#### Setup Steps:

1. **Connect Repository**
   - Go to Railway.app
   - Deploy from GitHub

2. **Environment Variables**
   - Add in Railway dashboard
   - Set `PORT` variable is handled automatically

## 🔧 Email Configuration

### Gmail App Password Setup

1. **Enable 2FA**
   - Go to Google Account settings
   - Enable 2-Factor Authentication

2. **Generate App Password**
   - Go to Security > App passwords
   - Select "Mail" and generate password
   - Use this password in `EMAIL_PASS`

### Alternative Email Services

#### SendGrid
```javascript
// In server.js, replace nodemailer config:
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

#### Mailgun
```javascript
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransporter(mg({
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}));
```

## 🌍 Domain Configuration

### Custom Domain Setup

1. **Purchase Domain**
   - Namecheap, GoDaddy, or Google Domains

2. **DNS Configuration**
   For Vercel:
   ```
   CNAME www your-app.vercel.app
   A @ 76.76.19.19
   ```

3. **SSL Certificate**
   - Most platforms provide automatic SSL
   - Force HTTPS in your domain settings

## 📊 Monitoring & Analytics

### Google Analytics

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Contact Form Analytics

Track form submissions:
```javascript
// In script.js contact form success
gtag('event', 'contact_form_submit', {
  'event_category': 'engagement',
  'event_label': 'contact_form'
});
```

## 🚨 Troubleshooting

### Common Issues

1. **Email Not Sending**
   - Check Gmail App Password
   - Verify 2FA is enabled
   - Check environment variables

2. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies in package.json
   - Check for missing environment variables

3. **404 Errors**
   - Verify routing configuration
   - Check static file serving
   - Ensure correct build directory

4. **Performance Issues**
   - Enable gzip compression
   - Optimize images
   - Use CDN for static assets

### Debug Commands

```bash
# Check server logs
heroku logs --tail

# Test API endpoint
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'

# Check environment variables
heroku config
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` to version control
   - Use different passwords for production

2. **Rate Limiting**
   - Contact form has built-in rate limiting
   - Consider adding CloudFlare for additional protection

3. **HTTPS**
   - Always use HTTPS in production
   - Update social links to HTTPS

4. **Dependencies**
   - Regularly update npm packages
   - Run `npm audit` to check for vulnerabilities

## 📈 Performance Optimization

1. **Image Optimization**
   - Compress images before uploading
   - Use WebP format when possible
   - Implement lazy loading

2. **Code Minification**
   - Minify CSS and JavaScript for production
   - Remove console.log statements

3. **CDN Setup**
   - Use CDN for static assets
   - Cache static files with long expiry

## 🎯 SEO Optimization

1. **Meta Tags**
   - Update title and description
   - Add Open Graph tags
   - Include Twitter Card tags

2. **Schema Markup**
   - Add JSON-LD structured data
   - Include Person schema for personal branding

3. **Sitemap**
   - Create XML sitemap
   - Submit to Google Search Console

## 📞 Support

If you encounter any issues during deployment:

- 📧 **Email**: patidarparth2660@gmail.com
- 💼 **LinkedIn**: [Parth Patidar](https://www.linkedin.com/in/parth-patidar-25a927290)
- 📱 **WhatsApp**: [+91 9509843596](https://wa.me/+919509843596)

---

**Good luck with your deployment! 🚀**

Built with ⚡ and passion by Parth Patidar